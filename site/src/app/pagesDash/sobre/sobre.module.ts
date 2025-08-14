import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    AngularEditorModule, FormsModule, HttpClientModule
  ],
  providers: []
})
export class SobreModule { }
