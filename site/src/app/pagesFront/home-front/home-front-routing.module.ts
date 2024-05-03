import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFrontComponent } from './home-front.component';

const routes: Routes = [
    {
        path:'',
        component: HomeFrontComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeFrontRoutingModule { }