import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IpaddressDataSource } from '../../services/ipaddress.datasource';
import { IpaddressService } from '../../services/ipaddress.service';
import { merge, fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  startWith,
  tap,
  delay,
} from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ipaddress-list',
  templateUrl: './ipaddress-list.component.html',
  styleUrls: ['./ipaddress-list.component.scss'],
})
export class IpaddressListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  data: any;
  hasError: boolean = false;
  // dataSource = new MatTableDataSource<IpaddressModel>();
  dataSource!: IpaddressDataSource;

  displayedColumns: string[] = ['ip', 'label', 'createdAt'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  // @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild('input', { static: true }) input!: ElementRef;

  private unsubscribe: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: IpaddressService
  ) {}

  ngOnInit(): void {
    this.dataSource = new IpaddressDataSource(this.service);
    this.dataSource.loadIpaddresses({ page: 0, size: 3 });
  }

  ngAfterViewInit() {
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    // fromEvent(this.input.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(150),
    //     distinctUntilChanged(),
    //     tap(() => {
    //       this.paginator.pageIndex = 0;
    //       this.loadIpaddressesPage();
    //     })
    //   )
    //   .subscribe();
    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(tap(() => this.loadIpaddressesPage()))
    //   .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  loadIpaddressesPage() {
    this.dataSource.loadIpaddresses({
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
    });
  }
}
