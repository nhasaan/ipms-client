import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  merge,
  Subscription,
  tap,
} from 'rxjs';
import { LogDataSource } from '../services/log.datasource';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.scss'],
})
export class LogListComponent implements OnInit, AfterViewInit {
  data: any;
  hasError: boolean = false;
  dataSource!: LogDataSource;

  displayedColumns: string[] = ['message', 'onModel', 'eventType', 'createdAt'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  @ViewChild('input', { static: true }) input!: ElementRef;

  private unsubscribe: Subscription[] = [];

  constructor(private route: ActivatedRoute, private service: LogService) {}

  ngOnInit(): void {
    this.dataSource = new LogDataSource(this.service);
    this.dataSource.loadLogs({ page: 0, size: 3 });
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(tap(() => this.loadLogsPage()))
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  loadLogsPage() {
    console.log(this.paginator);
    this.dataSource.loadLogs({
      page: this.paginator.pageIndex,
      size: this.paginator.pageSize,
    });
  }
}
