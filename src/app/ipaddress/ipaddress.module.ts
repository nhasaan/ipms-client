import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';
import { IpaddressRoutingModule } from './ipaddress-routing.module';
import { IpaddressService } from './services/ipaddress.service';
import { IpaddressHttpService } from './services/ipaddress-http.service';

@NgModule({
  declarations: [IpaddressListComponent],
  imports: [CommonModule, IpaddressRoutingModule],
  providers: [IpaddressService, IpaddressHttpService],
  bootstrap: [IpaddressListComponent],
})
export class IpaddressModule {}
