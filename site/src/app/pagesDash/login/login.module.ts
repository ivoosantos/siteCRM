import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DashModule } from 'src/app/features/dash/dash.module';
import { LoginRoutingModule } from './login-rounting.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    DashModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
