import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [LayoutComponent, AsideComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
