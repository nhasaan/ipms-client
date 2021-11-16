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
import { IpaddressModel } from '../models/ipaddress.model';
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
  getIpaddresses(filter?: any): Observable<any> {
    return this.ipaddrssHttpService.findAll(filter).pipe(
      map(() => {
        this.isLoadingSubject.next(false);
      }),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
}
