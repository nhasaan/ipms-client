import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpaddressCreateComponent } from './components/ipaddress-create/ipaddress-create.component';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';
import { IpaddressComponent } from './components/ipaddress/ipaddress.component';

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
        path: 'create',
        component: IpaddressCreateComponent,
      },
      {
        path: 'edit/:id',
        component: IpaddressCreateComponent,
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
