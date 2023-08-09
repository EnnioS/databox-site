import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from 'src/app/Components/alert/alert.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalSeoService } from 'src/app/services/canonical-seo.service';

//RECAPTCHA V3
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { TranslateService } from '@ngx-translate/core';

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

  /*RECAPTCHA GOOGLE - Ronald Garcia Account this key is running in the layout module
   webkey: "AIzaSyCiVzBd9z4nVmXr_R_AFoUIjAPkKsuA3cg"*/

  
 
  submitted = false;
  reCAPTCHAToken: string = "";
  tokenVisible: boolean = false;



  //form
  FormData:FormGroup;
  tituloAccion:string = "Submit";

  validationError : boolean = false;

  //alert optional
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  //Email Pattern
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Traducir ngx desde variables

  currentLang!:string;
  successEmail!:string;
  notSuccessEmail!:string;
  errorSendEmail!:string;

  

  constructor(
    private translate: TranslateService,
    private builder:FormBuilder,
    private contact: EmailService, 
    public alert:AlertService, 
    private title:Title,
    private MetaTagService:Meta, 
    private CanonicalService: CanonicalSeoService,
    private recaptchaV3Service: ReCaptchaV3Service) { 
    this.FormData = this.builder.group({
      first:['', Validators.required],
      last:[''],
      company:[''],
      country:[''],
      email: ['', [Validators.compose([Validators.required, Validators.email,Validators.pattern(this.emailPattern)])]],
      phone:[''],
      how:[''],
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


  //Translate
  this.currentLang = this.translate.currentLang;

 }


 //FORM AND NOTIFICATION
  onSubmit(formData:FormGroup){
    
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.tokenVisible = true;
      this.sendEmail(formData);
      this.reCAPTCHAToken = `Token [${token}] generated`;
  });

  }

  sendEmail(formData:FormGroup){
    if (this.FormData.valid){
      this.validationError = false;
      this.contact.SendEmail(formData).subscribe({
        next: (response) =>{
          if(response){
            console.log("sevice: Email enviado, respuesta: " + response);
            this.alertMessages(response)
            this.FormData.reset();
            
          }else{
            console.log("sevice: No hay respuesta, respuesta: " + response);
            this.alertMessages(response)
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
      this.translateEmailMessage();
      this.alert.success(this.successEmail, this.options);
    } else if(!response){
      this.alert.error(this.notSuccessEmail, this.options);
    } else{
      this.alert.info(this.errorSendEmail, this.options);
    }
  }

translateEmailMessage(){
  if(this.currentLang == 'es'){
    this.successEmail = "El correo fue enviado exitosamente";
    this.notSuccessEmail = "El correo no pudo ser enviado";
    this.errorSendEmail = "El correo no pudo ser enviado debido a un problema de conexion con el servidor";
  }else{
    this.successEmail = "The email was sent successfully";
    this.notSuccessEmail = "The email could not be sent";
    this.errorSendEmail = "EThe mail could not be sent due to a connection problem with the server";
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


//getters se están usando para validación de campos
  get first(){return this.FormData.get('first')}
  get email(){return this.FormData.get('email')}
  get subject(){return this.FormData.get('subject')}
  get message(){return this.FormData.get('message')}


}
