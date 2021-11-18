import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  IpaddressModel,
  IQueryParamsIpaddress,
} from '../models/ipaddress.model';

const API_IPADDRESSES_URL = `${environment.apiUrl}/ipaddresses`;

@Injectable({
  providedIn: 'root',
})
export class IpaddressHttpService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(private http: HttpClient) {}

  create(createModel: any) {
    return this.http.post<IpaddressModel>(
      `${API_IPADDRESSES_URL}/ipaddresses`,
      { createModel }
    );
  }

  update(updateModel: any) {
    return this.http.patch<IpaddressModel>(
      `${API_IPADDRESSES_URL}/ipaddresses`,
      { updateModel }
    );
  }

  findAllIpaddresses(queryString: string): Observable<any> {
    const token = JSON.parse(
      String(localStorage.getItem(this.authLocalStorageToken))
    ).accessToken;

    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<IpaddressModel[]>(
      `${API_IPADDRESSES_URL}${queryString}`,
      {
        headers: httpHeaders,
      }
    );
  }
}
