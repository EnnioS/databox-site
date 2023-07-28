import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor(private title:Title, private MetaTagService:Meta, private CanonicalService: CanonicalSeoService){}

  ngOnInit(): void {
    
     //MEADATA
     this.title.setTitle('Services | DATABOXAI');
     this.CanonicalService.createLinkForCanonicalURL();
     this.MetaTagService.updateTag(
      {name:'description', content: 'With our innovative solutions and expertise in artificial intelligence, data mining and security, we empower organizations to streamline their operations, enhance productivity, and unlock their full potential'}
    );
  }


  // servicesDescr = [{
  //   sm: 'We can help your business predict future trends by analyzing vast amounts of data and identifying patterns and relationships that are not easily visible to humans',
  //   sds: 'We can help your business detect anomalies, assign risk scores to transactions or users indicating the likelihood of fraud. We can help prioritize investigation....',
  //   sic: 'We can help your business understand and interpret visual content, similar to how humans recognize objects or patterns in images. Image classification with AI...',
  //   iotpd: 'We offer a comprehensive range of IoT product development services tailored to meet your specific needs and unlock the full potential of connected devices.',
  // }];

  // slidesStore = [
  //   {id: '1', img: "assets/img/icons/icon-19.svg", alt:"smart marketing", title:"Smart Marketing", description:this.servicesDescr.map(element => {return element.sm}),  url:"/smart-marketing"},
  //   {id: '2', img: "assets/img/icons/icon-20.svg", alt:"smart data safetly", title:"Smart Data Safetly", description:this.servicesDescr.map(element => {return element.sds}),  url:"/smart-data-safetly"},
  //   {id: '3', img: "assets/img/icons/icon-21.svg", alt:"smart image classification", title:"Smart Image Classification", description:this.servicesDescr.map(element => {return element.sic}),  url:"/smart-image-classification"},
  //   {id: '4', img: "assets/img/icons/icon-22.svg", alt:"iot product developer", title:"IoT Product Development", description:this.servicesDescr.map(element => {return element.iotpd}),  url:"/iot-product-development"}
   
  // ];

  servicesDescr:string[] = ['sm','sm-descript','sds','sds-descript','sic','sic-descipt','iotpd','iotpd-descipt'];

  slidesStore = [
    {id: '1', img: "assets/img/icons/icon-19.svg", alt:this.servicesDescr[0], title:this.servicesDescr[0], description:this.servicesDescr[1],  url:"/smart-marketing"},
    {id: '2', img: "assets/img/icons/icon-20.svg", alt:this.servicesDescr[2], title:this.servicesDescr[2], description:this.servicesDescr[3],  url:"/smart-data-safetly"},
    {id: '3', img: "assets/img/icons/icon-21.svg", alt:this.servicesDescr[4], title:this.servicesDescr[4], description:this.servicesDescr[5],  url:"/smart-image-classification"},
    {id: '4', img: "assets/img/icons/icon-22.svg", alt:this.servicesDescr[6], title:this.servicesDescr[6], description:this.servicesDescr[7],  url:"/iot-product-development"}
  ];

  
}
