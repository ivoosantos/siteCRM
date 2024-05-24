import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { HeaderDashModule } from '../header-dash/header-dash.module';
import { DashRoutingModule } from './dash-rounting.module';



@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    HeaderDashModule
  ],
  exports: [
    DashComponent
  ]
})
export class DashModule { }
