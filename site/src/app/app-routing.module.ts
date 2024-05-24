import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './features/dash/dash.component';
import { TesteDashComponent } from './pagesDash/teste-dash/teste-dash.component';
import { LoginComponent } from './pagesDash/login/login.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/services/guards/usuario-autenticado.guard';
import { HomeComponent } from './pagesDash/home/home.component';
import { SobreComponent } from './pagesDash/sobre/sobre.component';

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
    path: 'Login',
    // component: LoginComponent
    loadChildren: () => import('./pagesDash/login/login.module').then(m => m.LoginModule), canActivate: [UsuarioNaoAutenticadoGuard]
  },
  {
    path: 'admin',
    // loadChildren: () => import('./pagesDash/teste-dash/teste-dash.module').then(m => m.TesteDashModule)
    // loadChildren: () => import('./features/dash/dash.module').then(m => m.DashModule),
    component: DashComponent, canActivate: [UsuarioAutenticadoGuard],
    children: [
      {
        path: 'teste',
        component: TesteDashComponent
        // loadChildren: () => import('./pagesDash/teste-dash/teste-dash.module').then(m => m.TesteDashModule)
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
