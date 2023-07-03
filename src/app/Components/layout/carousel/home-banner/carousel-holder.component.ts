import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.scss']
})
export class CarouselHolderComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay:true,
    navSpeed: 500,
    autoplaySpeed:500,
    navText: ['<img src="assets/img/icons/left-arrow.svg">', '<img src="assets/img/icons/right-arrow.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  slidesStore = [
    {id: '1', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 1", title:"techno one"},
    {id: '2', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 2", title:"techno two"},
    {id: '3', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 3", title:"techno three"}
  ];
}
