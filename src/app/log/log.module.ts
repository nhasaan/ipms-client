import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './components/log/log.component';
import { LogService } from './services/log.service';
import { LogHttpService } from './services/log-http.service';

@NgModule({
  declarations: [LogComponent],
  imports: [CommonModule],
  providers: [LogService, LogHttpService],
})
export class LogModule {}
