import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './components/log/log.component';
import { LogService } from './services/log.service';
import { LogHttpService } from './services/log-http.service';
import { LogRoutingModule } from './log-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LogListComponent } from './log-list/log-list.component';

@NgModule({
  declarations: [LogComponent, LogListComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [LogService, LogHttpService],
  bootstrap: [LogComponent],
})
export class LogModule {}
