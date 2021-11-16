import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';
import { IpaddressComponent } from './ipaddress/ipaddress.component';

const routes: Routes = [
  {
    path: '',
    component: IpaddressComponent,
    children: [
      {
        path: 'list',
        component: IpaddressListComponent,
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
export class IpaddressRoutingModule {}
