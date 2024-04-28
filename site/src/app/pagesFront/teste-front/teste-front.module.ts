import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteFrontComponent } from './teste-front.component';
import { FrontModule } from 'src/app/features/front/front.module';
import { TesteFrontRoutingModule } from './teste-front-routing.module';



@NgModule({
  declarations: [
    TesteFrontComponent
  ],
  imports: [
    CommonModule,
    TesteFrontRoutingModule,
    FrontModule
  ]
})
export class TesteFrontModule { }
