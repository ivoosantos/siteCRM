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
  about: Sobre = new Sobre;

  ngOnInit(): void {
    this.getSobre();
  }

  getSobre() {
    this.sobreService.getSobre().subscribe((response: ISobre[]) => {
      this.about = response[0];
    })
  }

}

export class Sobre {
  id?: number = 0;
    titulo: string = '';
    descricao: string = '';
    tipo: string = '';
    idigreja: number = 0;
}