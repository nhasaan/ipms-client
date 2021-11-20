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
import { IQueryParamsLog, LogModel } from '../models/log.model';
import { LogHttpService } from './log-http.service';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  isLoadingSubject: BehaviorSubject<boolean>;
  totalLogCountEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private ipaddrssHttpService: LogHttpService) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
  }

  findLogs(queryParams: IQueryParamsLog): Observable<LogModel[]> {
    const { page, size, ...filter } = queryParams;
    const pageNumber = page ? page + 1 : 1;
    const pageSize = size || 3;

    let queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

    return this.ipaddrssHttpService.findAllLogs(queryString).pipe(
      map((res) => {
        const totalCount = (res && res.totalCount) || 0;
        const data = (res && res.data) || [];
        this.totalLogCountEvent.next(totalCount);
        return data;
      })
    );
  }
}
