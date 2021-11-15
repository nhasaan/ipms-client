import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';
import { IpaddressRoutingModule } from './ipaddress-routing.module';

@NgModule({
  declarations: [IpaddressListComponent],
  imports: [CommonModule, IpaddressRoutingModule],
  bootstrap: [IpaddressListComponent],
})
export class IpaddressModule {}
