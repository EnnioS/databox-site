import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private url = 'https://enniosaenz.com/phpmailer/php-mailer-db.php';

  constructor(private http: HttpClient) { 
    
  }

  SendEmail(data: FormGroup) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'//'application/x-www-form-urlencoded'
      })
    };

    return this.http.post(this.url, data, httpOptions);
    }

}
