import { Component, OnInit } from '@angular/core';
import { SobreService } from './services/sobre.service';
import { ISobre } from 'src/app/shared/ISobre';
import { NavigationBehaviorOptions, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor(private sobreService: SobreService, private router: Router) { }

  sobre: ISobre[] = [];

  ngOnInit(): void {
    this.getSobre();
  }

  getSobre() {
    this.sobreService.getSobre().subscribe((response: ISobre[]) => {
      console.log('Obj Sobre: ', response);
      this.sobre = response;
    })
  }

}
