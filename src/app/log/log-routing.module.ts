import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './components/log/log.component';
import { LogListComponent } from './components/log-list/log-list.component';

const routes: Routes = [
  {
    path: '',
    component: LogComponent,
    children: [
      {
        path: 'list',
        component: LogListComponent,
        data: { returnUrl: window.location.pathname },
      },
      {
        path: 'edit',
        data: { returnUrl: window.location.pathname },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRoutingModule {}
