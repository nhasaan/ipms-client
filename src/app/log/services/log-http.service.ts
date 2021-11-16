import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LogModel } from '../models/log.model';

const API_LOGS_URL = `${environment.apiUrl}/logs`;

@Injectable({
  providedIn: 'root',
})
export class LogHttpService {
  constructor(private http: HttpClient) {}

  findAll(queryParams?: any) {
    let queryString = '';

    if (queryParams) {
      Object.keys(queryParams).map((k) => {
        if (queryParams[0] === k) {
          queryString += `?${queryParams[k]}`;
        } else {
          queryString += `&${queryParams[k]}`;
        }
      });
    }

    return this.http.get<LogModel>(`${API_LOGS_URL}/logs/${queryString}`);
  }
}
