import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [{
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'home', pathMatch:'full'},
      {path:'home', title:"Inicio - DATABOX", component:HomeComponent},
      {path:'service', title:"Services - AI services", component:ServicesComponent},
      {path:'about', title:"About Us - We are a AI development Company", component:AboutComponent},
      {path:'contact', title:"Contact Us - How can we help you?", component:ContactComponent},
      // {path:'**', redirectTo:'inicio', pathMatch:'full'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule{}