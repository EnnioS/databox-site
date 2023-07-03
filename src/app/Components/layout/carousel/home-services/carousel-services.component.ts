import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-services',
  templateUrl: './carousel-services.component.html',
  styleUrls: ['./carousel-services.component.scss']
})
export class CarouselServicesComponent {
  serviceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    navSpeed: 3000,
    autoplaySpeed:3000,
    navText: ['<img src="assets/img/icons/left-arrow.svg">', '<img src="assets/img/icons/right-arrow.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  slidesStore = [
    {id: '1', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 1", title:"Service 1", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/service1"},
    {id: '2', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 2", title:"Service 2", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/service2"},
    {id: '3', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 3", title:"Service 3", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/service3"},
    {id: '2', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 2", title:"Service 4", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/service4"},
    {id: '3', img: "assets/img/home/hero-banner-15.jpg", alt:"techno 3", title:"Service 5", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/service5"}
  ];
}
