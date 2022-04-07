import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  FormBuilder, AbstractControl, ValidatorFn} from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  //variable loginForm -> it will be the json { "email" : "", "password" : ""}
  recForm: any;

  //variable clicked
  clicked = false;

  //login or password / api offline
  errorRec = false;

  //constructor
  //anything will run when access this page or reload
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  //here it's like a constructor as well, run when page load or reload
  //anything will run when access this page or reload
  ngOnInit(): void {

    //instance the login form and set the validators
    this.recForm = new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email, Validators.maxLength(60)])});
}
  //http post request with headers
  httpPost(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         })};

    return this.http.post<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  recovery()
  {
    if (this.recForm.valid) {

      this.clicked = true;

      let email = this.recForm.controls['email'].value;

      let data = { 
        email: email, 
       };

      alert('next alert will be showing the json struct');
      alert(JSON.stringify(data));

      this.httpPost("https://backend/", data).pipe(first())
        .subscribe(
          data => {
            this.errorRec = false;
          },
          error => {
            this.errorRec = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  goToHome()
  {
    this.router.navigate(['home']);
  }

}
