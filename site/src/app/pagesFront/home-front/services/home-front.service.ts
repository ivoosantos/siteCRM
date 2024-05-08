import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICarousel } from '../../../shared/ICarousel';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeFrontService {
    constructor(private http: HttpClient) { }

    getAllCarousels(){
        return this.http.get<ICarousel[]>(environment.apiUrl + 'carousel/listar');
    }
}
