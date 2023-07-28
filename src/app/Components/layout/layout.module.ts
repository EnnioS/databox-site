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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AlertModule } from '../alert/alert.module';
import { MarketingComponent } from './pages/services/marketing/marketing.component';
import { DataSafetlyComponent } from './pages/services/data-safetly/data-safetly.component';
import { ImageClassificationComponent } from './pages/services/image-classification/image-classification.component';
import { IotDevelopmentComponent } from './pages/services/iot-development/iot-development.component';

//RECAPTCHA V3 GOOGLE
import {
  // RecaptchaModule,
  // RECAPTCHA_SETTINGS,
  // RecaptchaSettings,
  // RecaptchaFormsModule,
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module
} from 'ng-recaptcha';

//NGX-TRANSLATE

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';





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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // RecaptchaModule,
    // RecaptchaFormsModule,
    RecaptchaV3Module
  ],
  providers: [
    { 
      provide: RECAPTCHA_V3_SITE_KEY, 
      useValue: "6LeAEx0nAAAAABgZ9MHmbGLEIlYBGWOkX-VmW5hs"
    }
  ],
})
export class LayoutModule { }

export function httpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/','.txt' );//se cambio la extención de ".json" a ".txt"  a los archivos de traducción porque no reconocía el formato ".json"
}
