import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { HeaderFrontModule } from '../header-front/header-front.module';
import { FooterFrontModule } from '../footer-front/footer-front.module';



@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    CommonModule,
    HeaderFrontModule,
    FooterFrontModule
  ],
  exports: [
    FrontComponent
  ]
})
export class FrontModule { }
