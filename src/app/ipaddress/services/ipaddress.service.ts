import { EventEmitter, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import {
  IpaddressCreate,
  IpaddressModel,
  IQueryParamsIpaddress,
} from '../models/ipaddress.model';
import { IpaddressHttpService } from './ipaddress-http.service';

@Injectable({
  providedIn: 'root',
})
export class IpaddressService {
  isLoadingSubject: BehaviorSubject<boolean>;
  totalIPCountEvent: EventEmitter<number> = new EventEmitter<number>();

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

    return this.ipaddrssHttpService.findAllIpaddresses(queryString).pipe(
      map((res) => {
        const totalCount = (res && res.totalCount) || 0;
        const data = (res && res.data) || [];
        this.totalIPCountEvent.next(totalCount);
        return data;
      })
    );
  }

  create(model: IpaddressCreate): Observable<IpaddressModel> {
    return this.ipaddrssHttpService.create(model);
  }

  update(id: string, model: IpaddressCreate): Observable<IpaddressModel> {
    return this.ipaddrssHttpService.update(id, model);
  }

  findIpaddress(id: string): Observable<IpaddressModel> {
    return this.ipaddrssHttpService.findOne(id);
  }
}
