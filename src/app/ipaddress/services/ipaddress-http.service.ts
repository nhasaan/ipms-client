import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IpaddressModel } from '../models/ipaddress.model';

const API_IPADDRESSES_URL = `${environment.apiUrl}/ipaddresses`;

@Injectable({
  providedIn: 'root',
})
export class IpaddressHttpService {
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

    return this.http.get<IpaddressModel>(
      `${API_IPADDRESSES_URL}/ipaddresses/${queryString}`
    );
  }
}
