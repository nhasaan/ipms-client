import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './components/log/log.component';
import { LogService } from './services/log.service';
import { LogHttpService } from './services/log-http.service';
import { LogRoutingModule } from './log-routing.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [LogComponent],
  imports: [CommonModule, LogRoutingModule, MatListModule],
  providers: [LogService, LogHttpService],
})
export class LogModule {}
