import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-services',
  templateUrl: './carousel-services.component.html',
  styleUrls: ['./carousel-services.component.scss']
})
export class CarouselServicesComponent {

  constructor(private translate: TranslateService){}


  serviceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:8000,
    navSpeed: 100,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    navText: ['<img src="assets/img/icons/left-arrow.svg">', '<img src="assets/img/icons/right-arrow.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  
    // servicesDescr = [{
  //   sm: 'We can help your business predict future trends by analyzing vast amounts of data and identifying patterns and relationships that are not easily visible to humans',
  //   sds: 'We can help your business detect anomalies, assign risk scores to transactions or users indicating the likelihood of fraud. We can help prioritize investigation....',
  //   sic: 'We can help your business understand and interpret visual content, similar to how humans recognize objects or patterns in images. Image classification with AI...',
  //   iotpd: 'We offer a comprehensive range of IoT product development services tailored to meet your specific needs and unlock the full potential of connected devices.',
  // }];

  servicesDescr:string[] = ['sm','sm-descript','sds','sds-descript','sic','sic-descipt','iotpd','iotpd-descipt'];

  slidesStore = [
    {id: '1', img: "assets/img/icons/icon-19.svg", alt:this.servicesDescr[0], title:this.servicesDescr[0], description:this.servicesDescr[1],  url:"/smart-marketing"},
    {id: '2', img: "assets/img/icons/icon-20.svg", alt:this.servicesDescr[2], title:this.servicesDescr[2], description:this.servicesDescr[3],  url:"/smart-data-safetly"},
    {id: '3', img: "assets/img/icons/icon-21.svg", alt:this.servicesDescr[4], title:this.servicesDescr[4], description:this.servicesDescr[5],  url:"/smart-image-classification"},
    {id: '4', img: "assets/img/icons/icon-22.svg", alt:this.servicesDescr[6], title:this.servicesDescr[6], description:this.servicesDescr[7],  url:"/iot-product-development"}
  ];

}
