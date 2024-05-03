import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagesFront/home-front/home-front.module').then(m => m.HomeFrontModule)
    // loadChildren: () => import('./features/front/front.module').then(m => m.FrontModule)
  },
  {
    path: 'Sobre',
    loadChildren: () => import('./pagesFront/sobre/sobre.module').then(m => m.SobreModule)
    // loadChildren: () => import('./features/dash/dash.module').then(m => m.DashModule)
  },
  {
    path: 'Grupos',
    loadChildren: () => import('./pagesFront/grupos/grupos.module').then(m => m.GruposModule)
  },
  {
    path: 'Missoes',
    loadChildren: () => import('./pagesFront/missoes/missoes.module').then(m => m.MissoesModule)
  },
  {
    path: 'Blog',
    loadChildren: () => import('./pagesFront/blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'Contato',
    loadChildren: () => import('./pagesFront/contato/contato.module').then(m => m.ContatoModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pagesDash/teste-dash/teste-dash.module').then(m => m.TesteDashModule)
    // loadChildren: () => import('./features/dash/dash.module').then(m => m.DashModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
