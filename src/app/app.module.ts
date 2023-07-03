import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './Components/layout/layout.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { CarouselHolderComponent } from './utilities/carousel/carousel-holder.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    // CarouselHolderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    // CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
