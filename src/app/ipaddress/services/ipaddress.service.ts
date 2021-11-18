import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { QueryResponse } from '../../shared/query-response';
import {
  IpaddressModel,
  IQueryParamsIpaddress,
} from '../models/ipaddress.model';
import { IpaddressHttpService } from './ipaddress-http.service';

@Injectable({
  providedIn: 'root',
})
export class IpaddressService {
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(private ipaddrssHttpService: IpaddressHttpService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
  }

  findIpaddresses(
    queryParams: IQueryParamsIpaddress
  ): Observable<IpaddressModel[]> {
    const { page, size, ...filter } = queryParams;
    const pageNumber = page ? page + 1 : 1;
    const pageSize = size || 3;

    let queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    return this.ipaddrssHttpService
      .findAllIpaddresses(queryString)
      .pipe(map((res) => res && res.data));
  }
}
