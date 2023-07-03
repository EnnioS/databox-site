import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  activeSubMenu:boolean = false;
  activeMobileMenu:boolean = false;
  screenWidth!:number;

  ngOnInit(): void {
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


  showMobileMenu(){
   if(this.activeMobileMenu){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
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


}
