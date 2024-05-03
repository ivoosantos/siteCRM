import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissoesComponent } from './missoes.component';
import { MissoesRoutingModule } from './missoes-routing.module';
import { FrontModule } from 'src/app/features/front/front.module';



@NgModule({
  declarations: [
    MissoesComponent
  ],
  imports: [
    CommonModule,
    MissoesRoutingModule,
    FrontModule
  ]
})
export class MissoesModule { }
