import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  constructor(private title:Title, private metaTagService: Meta){}

  ngOnInit(): void {
    this.title.setTitle('DATABOXAI');
    this.metaTagService.addTags([
      {name:'keywords', content:'databox, marketing, ai, IoT, Product development, Image Classification, Data Safetly'},
      {name:'robot', content: 'index, follow'},
      {name:'author', content: 'Ennio Sáenz'},
      {name:'viewport', content: 'width=device-width, initial-scale=1'},
    ]);
  }
}
