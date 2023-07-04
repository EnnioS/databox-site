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
      {path:'home', title:"Inicio | DATABOX", component:HomeComponent},
      {path:'services', title:"Services | DATABOX", component:ServicesComponent},
      {path:'about', title:"About Us | DATABOX", component:AboutComponent},
      {path:'contact', title:"Contact Us | DATABOX", component:ContactComponent},
      {path:'smart-marketing', title:"Smart Marketing | DATABOX", component:MarketingComponent},
      {path:'smart-data-safetly', title:"Smar Data Safetly | DATABOX", component:DataSafetlyComponent},
      {path:'smart-image-classification', title:"Smart Image Classification | DATABOX", component:ImageClassificationComponent},
      {path:'iot-product-development', title:"IoT Product Develpment | DATABOX", component:IotDevelopmentComponent},
      // {path:'**', redirectTo:'inicio', pathMatch:'full'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule{}