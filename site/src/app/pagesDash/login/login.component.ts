import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { IUsuario } from 'src/app/shared/IUsuario';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    senha: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  logar(){
    // if(this.loginForm.invalid) return;
    var usuario = this.loginForm.getRawValue() as IUsuario;
    console.log('User: ', usuario);
    this.loginService.logar(usuario).subscribe((response) => {
        if(!response.sucesso){
          alert('Usuário ou senha incorretos.');
          // this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
          //   duration: 3000
          // });
        }
    })
  }

}
