import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount'
  };

  constructor() { }

  binding: string = '';
  ngOnInit(): void {
  }

}
