import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/IBlog';
import { BlogService } from './services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService, private router: Router) { }

  blogs: IBlog[] = [];

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog() {
    this.blogService.getAllBlog().subscribe((response: IBlog[]) => {
      console.log('Blogs: ', response);
      this.blogs = response;
    }, (erro) => {
      console.log(erro);
    }
  )
  }

}
