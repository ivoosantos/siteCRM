import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/pagesDash/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    if(this.loginService.logado){
      this.router.navigate(['admin']);
      return false;
    }
    return true;
  }
  
}
