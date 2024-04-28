import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteFrontComponent } from './teste-front.component';

const routes: Routes = [
    {
        path:'',
        component: TesteFrontComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TesteFrontRoutingModule { }