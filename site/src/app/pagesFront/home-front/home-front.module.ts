import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFrontComponent } from './home-front.component';
import { FrontModule } from 'src/app/features/front/front.module';
import { HomeFrontRoutingModule } from './home-front-routing.module';



@NgModule({
  declarations: [
    HomeFrontComponent
  ],
  imports: [
    CommonModule,
    HomeFrontRoutingModule,
    FrontModule
  ]
})
export class HomeFrontModule { }
