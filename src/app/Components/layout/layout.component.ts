import { Component,  OnInit, ViewEncapsulation  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import { TranslateService } from '@ngx-translate/core/public_api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  constructor(private translate:TranslateService){
    this.setAppLang();
  }

  setAppLang():void{
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  

  ngOnInit(): void {
  }
}
