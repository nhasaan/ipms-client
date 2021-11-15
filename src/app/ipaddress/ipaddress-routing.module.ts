import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';

const routes: Routes = [
  {
    path: '',
    component: IpaddressListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpaddressRoutingModule {}
