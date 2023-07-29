import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from 'src/app/Components/alert/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  FormData:FormGroup;
  tituloAccion:string = "Submit";

  //alert optional
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  constructor(private builder:FormBuilder, private contact: EmailService, public alert:AlertService) { 
    this.FormData = this.builder.group({
      first:['', Validators.required],
      last:['', Validators.required],
      company:['', Validators.required],
      country:['', Validators.required],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      phone:['', Validators.required],
      how:['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to: ['ronald.garcia@databoxai.com']
    });
  }

  onSubmit(formData:FormGroup){
    console.log(formData);
    this.contact.SendEmail(formData).subscribe({
      next: (response) =>{
        if(response){
          console.log("sevice: Email enviado, , respuesta: " + response);
          this.alertMessages(response)
          this.FormData = this.builder.group({
      
            // first:['',],
            // last:['',],
            // company:['',],
            // country:['',],
            // email: ['',],
            // phone:['',],
            // how:['',],
            // subject: ['',],
            // message: ['',]

            first:['', Validators.required],
            last:['', Validators.required],
            company:['', Validators.required],
            country:['', Validators.required],
            email: ['', [Validators.compose([Validators.required, Validators.email])]],
            phone:['', Validators.required],
            how:['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required],
            
          });
        }
      },
      error: (response) => {
        if(response){
          console.log("sevice: No hay respuesta, error: " + response);
          this.alertMessages(response)
        }else{
          console.log("sevice: No hay respuesta, error: " + response);
          this.alertMessages(response)
        }
      }
    });
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
}
