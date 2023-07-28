import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  activeSubMenu:boolean = false;
  activeSubMenu2:boolean = false;
  activeMobileMenu:boolean = false;
  screenWidth!:number;
  currentLang!:string;
  constructor(private translate:TranslateService){

  }

  ngOnInit(): void {

    //NGX Translate
    this.currentLang = this.translate.currentLang;

    //Screen size
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 800){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }

  }

  showSubMenu(){
    if(this.activeSubMenu){
      this.activeSubMenu = false;
    }else{
      this.activeSubMenu = true;
    }
  }

  showSubMenu2(){
    if(this.activeSubMenu2){
      this.activeSubMenu2 = false;
    }else{
      this.activeSubMenu2 = true;
    }
  }


  showMobileMenu(){
   if(this.activeMobileMenu){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }
  }

  closeMenMoble(){
    if(this.screenWidth<=800){
      this.activeMobileMenu =false;
    }
  }

  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 800){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }

  }

  enLanguage(){
    this.translate.use('en');
  }

  esLanguage(){
    this.translate.use('es');
  }


}
