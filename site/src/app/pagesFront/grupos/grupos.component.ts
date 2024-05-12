import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGrupos } from 'src/app/shared/IGrupos';
import { GruposService } from './services/grupos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit, OnDestroy {

  constructor(private gruposService: GruposService, private router: Router) { }

  grupos: IGrupos[] = [];
  grupo: Grupos = new Grupos;

  ngOnInit(): void {
    this.getAllGrupos();
  }
  ngOnDestroy(): void {
      
  }

  getAllGrupos() {
    this.gruposService.getAllGrupos().subscribe((response: IGrupos[]) => {
      this.grupos = response;
    })
  }

  getId(id: number){
    this.gruposService.getByIdGrupo(id).subscribe((resp: Grupos) => {
      this.grupo = resp;
    })
  }
}

export class Grupos {
  id: number = 0;
  titulo: string = '';
  descricao: string = '';
  slug: string = '';
  categoria: string = '';
  nome: string = '';
  imgByte: string = '';
  idigreja: number = 0;
}