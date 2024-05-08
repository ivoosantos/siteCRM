import { Component, OnInit } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';
import { ICarousel } from 'src/app/shared/ICarousel';
import { HomeFrontService } from './services/home-front.service';

@Component({
  selector: 'app-home-front',
  templateUrl: './home-front.component.html',
  styleUrls: ['./home-front.component.scss']
})
export class HomeFrontComponent implements OnInit {

  constructor(private homeFrontService: HomeFrontService, private router: Router) { }

  carousel: ICarousel[] = [];

  ngOnInit(): void {
    this.getAllCarousel();
  }

  getAllCarousel() {
    this.homeFrontService.getAllCarousels().subscribe((response: ICarousel[]) => {
      this.carousel = response;
      console.log('Obj Carousel: ', this.carousel);
    })
  }

}
