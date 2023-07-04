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
    {id: '1', img: "assets/img/icons/icon-19.svg", alt:"smart marketing", title:"Smart Marketing", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/smart-marketing"},
    {id: '2', img: "assets/img/icons/icon-20.svg", alt:"smart data safetly", title:"Smart Data Safetly", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/smart-data-safetly"},
    {id: '3', img: "assets/img/icons/icon-21.svg", alt:"smart image classification", title:"Smart Image Classification", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/smart-image-classification"},
    {id: '4', img: "assets/img/icons/icon-22.svg", alt:"iot product developer", title:"IoT Product Development", description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh",  url:"/iot-product-development"}
   
  ];
}
