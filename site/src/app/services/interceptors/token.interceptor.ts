import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { LoginService } from 'src/app/pagesDash/login/services/login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    const token = this.loginService.obterTokenUsuario;
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.apiUrl.split('/');
    
    if (token && requestUrl[2] === apiUrl[2]) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                token: `${token}`
            }
        });
        return next.handle(request).pipe(catchError(err => throwError(err)));
        // return next.handle(request).pipe(catchError(error => {
        //     if (error instanceof HttpErrorResponse && error.status === 401)
        //       this.loginService.deslogar();
        //     else
        //       return new Error(error.error.message)
        //       // return this.handlerError
        //       // return throwError(() => error.message);
        // }));
    }
    else {
        return next.handle(request);
    }
  }

  private handlerError(err: HttpErrorResponse): Observable<never> {
      return throwError(() => err.message);
  }
}
