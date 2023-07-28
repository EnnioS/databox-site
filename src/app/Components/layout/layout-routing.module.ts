import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MarketingComponent } from './pages/services/marketing/marketing.component';
import { DataSafetlyComponent } from './pages/services/data-safetly/data-safetly.component';
import { ImageClassificationComponent } from './pages/services/image-classification/image-classification.component';
import { IotDevelopmentComponent } from './pages/services/iot-development/iot-development.component';

const routes: Routes = [{
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'services', component:ServicesComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'smart-marketing', component:MarketingComponent},
      {path:'smart-data-safetly', component:DataSafetlyComponent},
      {path:'smart-image-classification', component:ImageClassificationComponent},
      {path:'iot-product-development', component:IotDevelopmentComponent},
      // {path:'**', redirectTo:'inicio', pathMatch:'full'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule{}