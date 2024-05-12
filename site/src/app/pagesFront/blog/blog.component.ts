import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/IBlog';
import { BlogService } from './services/blog.service';
import { Router } from '@angular/router';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT);

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router) { }

  blogs: IBlog[] = [];
  blog: Blog = new Blog;

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getAllBlog().subscribe((response: IBlog[]) => {
      this.blogs = response;
    }, (erro) => {}
    )
  }

  getByIdBlog(id: number) {
    this.blogService.getByIdBlog(id).subscribe((resp: Blog) => {
      this.blog = resp;
    })
  }

}

export class Blog {
    id: number = 0;
    titulo: string = '';
    slug: string = '';
    texto: string = '';
    img: string = '';
    dataPost: Date = new Date;
    imgByte: string = '';
}