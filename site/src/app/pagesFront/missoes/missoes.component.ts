import { Component, OnInit } from '@angular/core';
import { MissoesService } from './services/missoes.service';
import { Router } from '@angular/router';
import { IMissoes } from 'src/app/shared/IMissoes';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT);

@Component({
  selector: 'app-missoes',
  templateUrl: './missoes.component.html',
  styleUrls: ['./missoes.component.scss']
})
export class MissoesComponent implements OnInit {

  constructor(private missoesService: MissoesService, private router: Router) { }

  missoes: IMissoes[] = [];
  missao: Missao = new Missao;

  ngOnInit(): void {
    this.getAllMissoes();
  }

  getAllMissoes(){
    this.missoesService.getAllMissoes().subscribe((response: IMissoes[]) => {
      this.missoes = response;
    })
  }

  getByIdMissao(id: number) {
    this.missoesService.getByIdMissao(id).subscribe((resp: Missao) => {
      this.missao = resp;
    })
  }

}

export class Missao {
    id: number = 0;
    titulo: string = '';
    slug: string = '';
    texto: string = '';
    dataPost: Date = new Date();
    imgByte: string = '';
}