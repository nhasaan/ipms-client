import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IpaddressModel } from '../models/ipaddress.model';

const API_IPADDRESSES_URL = `${environment.apiUrl}/ipaddresses`;

@Injectable({
  providedIn: 'root',
})
export class IpaddressHttpService {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  private token = JSON.parse(
    String(localStorage.getItem(this.authLocalStorageToken))
  ).accessToken;

  private httpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient) {}

  create(createModel: any) {
    return this.http.post<IpaddressModel>(
      `${API_IPADDRESSES_URL}`,
      {
        ...createModel,
      },
      {
        headers: this.httpHeaders,
      }
    );
  }

  findOne(id: string) {
    return this.http.get<IpaddressModel>(`${API_IPADDRESSES_URL}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  update(id: string, updateModel: any) {
    return this.http.patch<IpaddressModel>(
      `${API_IPADDRESSES_URL}/${id}`,
      {
        ...updateModel,
      },
      {
        headers: this.httpHeaders,
      }
    );
  }

  findAllIpaddresses(queryString: string): Observable<any> {
    return this.http.get<IpaddressModel[]>(
      `${API_IPADDRESSES_URL}${queryString}`,
      {
        headers: this.httpHeaders,
      }
    );
  }
}
