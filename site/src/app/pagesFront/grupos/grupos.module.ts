import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GruposComponent } from './grupos.component';
import { GruposRoutingModule } from './grupos-routing.module';
import { FrontModule } from 'src/app/features/front/front.module';



@NgModule({
  declarations: [
    GruposComponent
  ],
  imports: [
    CommonModule,
    GruposRoutingModule,
    FrontModule
  ]
})
export class GruposModule { }
