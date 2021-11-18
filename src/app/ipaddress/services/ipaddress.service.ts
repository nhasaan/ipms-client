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
import { QueryResponseDTO } from 'src/app/shared/query-response.dto';
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

  // need create new user then login
  // findIpaddresses(filter: IQueryParamsIpaddress): Observable<IpaddressModel[]> {
  //   return this.ipaddrssHttpService.findAllIpaddresses(filter).pipe(
  //     map(() => {
  //       this.isLoadingSubject.next(false);
  //     }),
  //     catchError((err) => {
  //       console.error('err', err);
  //       return of(undefined);
  //     }),
  //     finalize(() => this.isLoadingSubject.next(false))
  //   );
  // }

  findIpaddresses(
    queryParams: IQueryParamsIpaddress
  ): Observable<IpaddressModel[]> {
    const { page, size, ...filter } = queryParams;
    const pageNumber = page ? page + 1 : 1;
    const pageSize = size || 3;

    let queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    // if (filter) {
    //   Object.keys(filter).map((k) => {
    //     if (k) {
    //       queryString += `&${k}`;
    //     }
    //   });
    // }

    return this.ipaddrssHttpService
      .findAllIpaddresses(queryString)
      .pipe(map((res) => res && res.data));

    // return this.http
    //   .get(`${API_URL}/logs`, {
    //     params: new HttpParams()
    //       .set('courseId', courseId.toString())
    //       .set('filter', filter)
    //       .set('sortOrder', sortOrder)
    //       .set('pageNumber', pageNumber.toString())
    //       .set('pageSize', pageSize.toString()),
    //   })
    //   .pipe(map((res) => res['payload']));
  }
}
