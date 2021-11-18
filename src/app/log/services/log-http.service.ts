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

  constructor(private http: HttpClient) {}

  findAllIpaddresses(queryString: string): Observable<any> {
    const token = JSON.parse(
      String(localStorage.getItem(this.authLocalStorageToken))
    ).accessToken;

    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<LogModel[]>(`${API_LOGS_URL}${queryString}`, {
      headers: httpHeaders,
    });
  }
}
