import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog } from 'src/app/shared/IBlog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    constructor(private http: HttpClient, private router: Router) {}

    getAllBlog() {
       return this.http.get<IBlog[]>(environment.apiUrl + 'blog/listar');
    }
}