import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteDashComponent } from './teste-dash.component';
import { DashModule } from 'src/app/features/dash/dash.module';
import { TesteDashRoutingModule } from './teste-dash-rounting.module';


@NgModule({
  declarations: [
    TesteDashComponent
  ],
  imports: [
    CommonModule,
    TesteDashRoutingModule,
    DashModule
  ]
})
export class TesteDashModule { }
