import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from '../layout/layout.component';

import { LayoutRoutingModule} from './layout-routing.module';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel/home-banner/carousel-holder.component';
import { CarouselServicesComponent } from './carousel/home-services/carousel-services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from '../alert/alert.module';
import { MarketingComponent } from './pages/services/marketing/marketing.component';
import { DataSafetlyComponent } from './pages/services/data-safetly/data-safetly.component';
import { ImageClassificationComponent } from './pages/services/image-classification/image-classification.component';
import { IotDevelopmentComponent } from './pages/services/iot-development/iot-development.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    CarouselHolderComponent,
    CarouselServicesComponent,
    MarketingComponent,
    DataSafetlyComponent,
    ImageClassificationComponent,
    IotDevelopmentComponent 
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule
  ]
})
export class LayoutModule { }
