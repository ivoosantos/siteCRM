import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMissoes } from 'src/app/shared/IMissoes';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MissoesService {
    constructor(private http: HttpClient){}

    getAllMissoes(){
        return this.http.get<IMissoes[]>(environment.apiUrl + 'missoes/listar');
    }
}
