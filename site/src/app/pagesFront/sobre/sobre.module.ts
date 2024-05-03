import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { FrontModule } from 'src/app/features/front/front.module';
import { SobreRoutingModule } from './sobre-routing.module';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    FrontModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
