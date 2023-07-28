import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-data-safetly',
  templateUrl: './data-safetly.component.html',
  styleUrls: ['./data-safetly.component.scss']
})
export class DataSafetlyComponent implements OnInit{
  screenWidth!:number;
  isMobileScreen!:boolean;
  isMobileScreen2!:boolean;
  imgHead!:string;

  constructor(private title:Title,private MetaTagService:Meta, private CanonicalService: CanonicalSeoService){}

  ngOnInit(): void {
     
    //MEADATA
    
    this.title.setTitle('Smart Data Safety | DATABOXAI');
    this.CanonicalService.createLinkForCanonicalURL();
    this.MetaTagService.updateTag(
      {name:'description', content: 'We can help your business detect anomalies, assign risk scores to transactions or users indicating the likelihood of fraud.'}
    );

    //SCREEN SIZE TO CHANGE IMAGE
     this.screenWidth = window.innerWidth;
    
    if(this.screenWidth <680){
      this.isMobileScreen = true
    } else{
      this.isMobileScreen = false
      this.isMobileScreen2 = false
    }

    if(this.isMobileScreen){
      this.imgMovil2(this.isMobileScreen)
    }

    this.changeHeadermage(this.isMobileScreen, this.isMobileScreen2)
  }

  imgMovil2(isMobilescreen:boolean){
    if(this.screenWidth <=500 && isMobilescreen == true){
      this.isMobileScreen2 = true
      this.isMobileScreen = false
      
    }
  }
  
  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=680){
      this.isMobileScreen = true
    } else{
      this.isMobileScreen = false
      this.isMobileScreen2 = false
    }

    if(this.isMobileScreen){
      this.imgMovil2(this.isMobileScreen)
    }

    this.changeHeadermage(this.isMobileScreen, this.isMobileScreen2)
  }

  changeHeadermage(isMobilescreen:boolean, isMobilescreen2:boolean){
    if(!isMobilescreen && !isMobilescreen2){
      this.imgHead = "assets/img/services/hero-banner-18.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/services/hero-banner-movil-35.jpg";
    }else if(isMobilescreen2){
      this.imgHead = "assets/img/services/hero-banner-movil-36.jpg";
    }
  }
}
