import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IpaddressModel } from '../models/ipaddress.model';
import { IpaddressService } from './ipaddress.service';

export class IpaddressDataSource implements DataSource<IpaddressModel> {
  private ipaddressesSubject = new BehaviorSubject<IpaddressModel[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private ipaddressService: IpaddressService) {}

  //   loadIpaddresses({
  //     _id,
  //     search,
  //     page,
  //     size,
  //   }: {
  //     _id?: string;
  //     search?: string;
  //     page: number;
  //     size: number;
  //   }) {
  //     this.loadingSubject.next(true);

  //     this.ipaddressService
  //       .findIpaddresses({ _id, search, page, size })
  //       .pipe(
  //         catchError(() => of([])),
  //         finalize(() => this.loadingSubject.next(false))
  //       )
  //       .subscribe((ipaddresses) => this.ipaddressesSubject.next(ipaddresses));
  //   }

  loadIpaddresses({
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

    this.ipaddressService
      .findIpaddresses({
        _id,
        search,
        page,
        size,
      })
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((ipaddresses) => this.ipaddressesSubject.next(ipaddresses));
  }

  connect(collectionViewer: CollectionViewer): Observable<IpaddressModel[]> {
    console.log('Connecting data source');
    return this.ipaddressesSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.ipaddressesSubject.complete();
    this.loadingSubject.complete();
  }
}
