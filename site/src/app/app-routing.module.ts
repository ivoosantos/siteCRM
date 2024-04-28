import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagesFront/teste-front/teste-front.module').then(m => m.TesteFrontModule)
    // loadChildren: () => import('./features/front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./pagesDash/teste-dash/teste-dash.module').then(m => m.TesteDashModule)
    // loadChildren: () => import('./features/dash/dash.module').then(m => m.DashModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
