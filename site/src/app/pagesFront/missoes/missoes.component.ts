import { Component, OnInit } from '@angular/core';
import { MissoesService } from './services/missoes.service';
import { Router } from '@angular/router';
import { IMissoes } from 'src/app/shared/IMissoes';

@Component({
  selector: 'app-missoes',
  templateUrl: './missoes.component.html',
  styleUrls: ['./missoes.component.scss']
})
export class MissoesComponent implements OnInit {

  constructor(private missoesService: MissoesService, private router: Router) { }

  missoes: IMissoes[] = [];

  ngOnInit(): void {
    this.getAllMissoes();
  }

  getAllMissoes(){
    this.missoesService.getAllMissoes().subscribe((response: IMissoes[]) => {
      this.missoes = response;
      console.log('Missoes: ', this.missoes);
    })
  }

}
