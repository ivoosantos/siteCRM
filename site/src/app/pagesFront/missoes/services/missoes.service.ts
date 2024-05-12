import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMissoes } from 'src/app/shared/IMissoes';
import { environment } from 'src/environments/environment';
import { Missao } from '../missoes.component';

@Injectable({
    providedIn: 'root'
})
export class MissoesService {
    constructor(private http: HttpClient){}

    getAllMissoes(){
        return this.http.get<IMissoes[]>(environment.apiUrl + 'missoes/listar');
    }

    getByIdMissao(id: number) {
        return this.http.get<Missao>(environment.apiUrl + 'missoes/' + id);
    }
}
