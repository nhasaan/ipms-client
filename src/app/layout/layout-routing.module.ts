import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/ipaddresses',
        pathMatch: 'full',
      },
      {
        path: 'ipaddresses',
        loadChildren: () =>
          import('../ipaddress/ipaddress.module').then(
            (m) => m.IpaddressModule
          ),
      },
      {
        path: 'logs',
        loadChildren: () =>
          import('../log/log.module').then((m) => m.LogModule),
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
