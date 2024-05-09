import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGrupos } from 'src/app/shared/IGrupos';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class GruposService {
    constructor(private http: HttpClient){}

    getAllGrupos(){
        return this.http.get<IGrupos[]>(environment.apiUrl + 'grupo/listar');
    }
}
