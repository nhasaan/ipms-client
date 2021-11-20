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
import { IQueryParamsLog, LogModel } from '../models/log.model';
import { LogHttpService } from './log-http.service';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(private ipaddrssHttpService: LogHttpService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
  }

  findLogs(queryParams: IQueryParamsLog): Observable<LogModel[]> {
    const { page, size, ...filter } = queryParams;
    const pageNumber = page ? page + 1 : 1;
    const pageSize = size || 3;

    let queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    return this.ipaddrssHttpService
      .findAllLogs(queryString)
      .pipe(map((res) => res && res.data));
  }
}
