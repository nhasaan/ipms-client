import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { LogModel } from '../models/log.model';
import { LogService } from './log.service';

export class LogDataSource implements DataSource<LogModel> {
  private logsSubject = new BehaviorSubject<LogModel[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private logService: LogService) {}

  loadLogs({
    _id,
    search,
    page,
    size,
  }: {
    _id?: string;
    search?: string;
    page: number;
    size: number;
  }) {
    this.loadingSubject.next(true);

    this.logService
      .findLogs({
        _id,
        search,
        page,
        size,
      })
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((logs) => this.logsSubject.next(logs));
  }

  connect(collectionViewer: CollectionViewer): Observable<LogModel[]> {
    console.log('Connecting data source');
    return this.logsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.logsSubject.complete();
    this.loadingSubject.complete();
  }
}
