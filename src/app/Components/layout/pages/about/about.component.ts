import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  screenWidth!:number;
  isMobileScreen!:boolean;
  imgHead!:string;

  constructor(private title:Title, private metaTagService:Meta, private CanonicalService: CanonicalSeoService){}

  ngOnInit(): void {
     this.screenWidth = window.innerWidth;
    
    if(this.screenWidth <=550){
      this.isMobileScreen = true
    } else{
      this.isMobileScreen = false
    }

    this.changeHeadermage(this.isMobileScreen)

    
    //META DATA

    this.title.setTitle('About | DATABOXAI');
    this.CanonicalService.createLinkForCanonicalURL();

    this.metaTagService.updateTag(
      {name:'description', content: 'As a leading software company specializing in AI, we harness the power of advanced algorithms and machine learning to unlock new frontiers of innovation.'}
    );
  }

  
  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=550){
      this.isMobileScreen = true
    } else{
      this.isMobileScreen = false
    }

    this.changeHeadermage(this.isMobileScreen)

  }

  changeHeadermage(isMobilescreen:boolean){
    if(!isMobilescreen){
      this.imgHead = "assets/img/about/hero-banner-16.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/about/hero-banner-16.jpg";
    }
  }
}
