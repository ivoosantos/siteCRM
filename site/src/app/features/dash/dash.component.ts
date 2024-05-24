import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/pagesDash/login/services/login.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  deslogar(){
    this.loginService.deslogar();
  }

}
