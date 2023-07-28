import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  home:string[] = ['metaDescription'];

  constructor(private title:Title, private metaTagService:Meta, private CanonicalService:CanonicalSeoService, private translate: TranslateService){

  }



  ngOnInit(): void {

    this.title.setTitle('Home | DATABOXAI');
    this.CanonicalService.createLinkForCanonicalURL();
    this.metaTagService.updateTag(
      {name:'description', content: 'DataBoxAI is a cutting-edge software company dedicated to revolutionizing the way businesses thrive in the digital era.'}
    );
  }
  
}
