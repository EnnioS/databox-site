import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from 'src/app/Components/alert/alert.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

//RECAPTCHA V3
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  //change Image
  screenWidth!:number;
  isMobileScreen!:boolean;
  imgHead!:string;

  //RECAPTCHA GOOGLE - Ennio Account
  captchaSiteKey: string = "6LeAEx0nAAAAABgZ9MHmbGLEIlYBGWOkX-VmW5hs";
  captchaServerKey: string = "6LeAEx0nAAAAAJ1H1jobFKxJ_5dWIcgvXt8N3Ltz";
 
  submitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;



  //form
  FormData:FormGroup;
  tituloAccion:string = "Submit";

  validationError : boolean = false;

  //alert optional
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };



  constructor(private builder:FormBuilder, private contact: EmailService, 
    public alert:AlertService, 
    private title:Title,
    private MetaTagService:Meta, 
    private CanonicalService: CanonicalSeoService,
    private recaptchaV3Service: ReCaptchaV3Service) { 
    this.FormData = this.builder.group({
      first:['', Validators.required],
      last:['', Validators.required],
      company:['', Validators.required],
      country:['', Validators.required],
      email: ['', [Validators.compose([Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")])]],
      phone:['', Validators.required],
      how:['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to: ['ronald.garcia@databoxai.com']
    });
    
  
  }

  ngOnInit(): void {
    

    //LARGO PANTALLA PARA MÓvILES

    this.screenWidth = window.innerWidth;
   
   if(this.screenWidth <=550){
     this.isMobileScreen = true
   } else{
     this.isMobileScreen = false
   }
  
   this.changeHeadermage(this.isMobileScreen)

   
   //METADATA

   this.title.setTitle('Contact | DATABOXAI');
   this.CanonicalService.createLinkForCanonicalURL();
   this.MetaTagService.updateTag(
    {name:'description', content: 'We are based in Central America and work with clients and partners worldwide. Dive deep into the heart of our vibrant culture and immerse yourself wh us.'}
  );
 }


 //FORM AND NOTIFICATION
  onSubmit(formData:FormGroup){
    this.sendEmail(formData);
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.tokenVisible = true;
      this.reCAPTCHAToken = `Token [${token}] generated`;
  });

  }

  sendEmail(formData:FormGroup){
    if (this.FormData.valid){
      this.validationError = false;
      this.contact.SendEmail(formData).subscribe({
        next: (response) =>{
          if(response){
            console.log("sevice: Email enviado, , respuesta: " + response);
            this.alertMessages(response)
            
            // this.FormData = this.builder.group({
             
            //   first:['', Validators.required],
            //   // last:['', Validators.required],
            //   // company:['', Validators.required],
            //   // country:['', Validators.required],
            //   email: ['', [Validators.compose([Validators.required, Validators.email])]],
            //   // phone:['', Validators.required],
            //   // how:['', Validators.required],
            //   subject: ['', Validators.required],
            //   message: ['', Validators.required],
              
            // });
          }
        },
        error: (response) => {
          if(response){
            console.log("sevice: No hay respuesta, error: " + response);
            this.alertMessages(response)
          }
        }
      });
    }else{
      this.validationError = true;
    }
  }

  alertMessages(response:any):void{
    if(response){
      this.alert.success('El correo fue enviado exitosamente', this.options);
    } else if(!response){
      this.alert.error('El correo no pudo ser enviado', this.options);
    } else{
      this.alert.info('El correo no pudo ser enviado, no hay conexión hacia el servidor', this.options);
    }
  }


  //CHANGE IMAGE

  
  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <=550){
      this.isMobileScreen = true
    } else{
      this.isMobileScreen = false
    }

    this.changeHeadermage(this.isMobileScreen)
  }

  changeHeadermage(isMobilescreen:boolean){
    if(!isMobilescreen){
      this.imgHead = "assets/img/contact/hero-banner-17.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/contact/hero-banner-17.jpg";
    }
  }


}
