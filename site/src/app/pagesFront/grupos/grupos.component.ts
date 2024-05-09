import { Component, OnInit } from '@angular/core';
import { IGrupos } from 'src/app/shared/IGrupos';
import { GruposService } from './services/grupos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  constructor(private gruposService: GruposService, private router: Router) { }

  grupos: IGrupos[] = [];

  ngOnInit(): void {
    this.getAllGrupos();
  }

  getAllGrupos() {
    this.gruposService.getAllGrupos().subscribe((response: IGrupos[]) => {
      this.grupos = response;
      console.log('Grupos: ', this.grupos);
    })
  }
}
