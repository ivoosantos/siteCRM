import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissoesComponent } from './missoes.component';

const routes: Routes = [
    {
        path:'',
        component: MissoesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MissoesRoutingModule { }