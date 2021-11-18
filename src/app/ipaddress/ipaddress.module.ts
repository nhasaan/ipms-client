import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpaddressListComponent } from './components/ipaddress-list/ipaddress-list.component';
import { IpaddressRoutingModule } from './ipaddress-routing.module';
import { IpaddressService } from './services/ipaddress.service';
import { IpaddressHttpService } from './services/ipaddress-http.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IpaddressComponent } from './components/ipaddress/ipaddress.component';

@NgModule({
  declarations: [IpaddressListComponent, IpaddressComponent],
  imports: [
    CommonModule,
    IpaddressRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  providers: [IpaddressService, IpaddressHttpService],
  bootstrap: [IpaddressComponent],
})
export class IpaddressModule {}
