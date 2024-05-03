import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteDashComponent } from './teste-dash.component';

const routes: Routes = [
    {
        path:'',
        component: TesteDashComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TesteDashRoutingModule { }