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
import { LogModel } from '../models/log.model';
import { LogHttpService } from './log-http.service';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(private ipaddrssHttpService: LogHttpService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
  }

  // need create new user then login
  getLogs(filter?: any): Observable<any> {
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
