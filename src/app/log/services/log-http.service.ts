import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LogModel } from '../models/log.model';

const API_LOGS_URL = `${environment.apiUrl}/logs`;

@Injectable({
  providedIn: 'root',
})
export class LogHttpService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  private token = JSON.parse(
    String(localStorage.getItem(this.authLocalStorageToken))
  ).accessToken;

  private httpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient) {}

  findAllLogs(queryString: string): Observable<any> {
    return this.http.get<LogModel[]>(`${API_LOGS_URL}${queryString}`, {
      headers: this.httpHeaders,
    });
  }
}
