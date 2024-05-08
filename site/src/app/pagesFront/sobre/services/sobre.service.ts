import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISobre } from '../../../shared/ISobre';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SobreService {
    constructor(private http: HttpClient) { }

    getSobre(){
        return this.http.get<ISobre[]>(environment.apiUrl + 'sobres');
    }
}
