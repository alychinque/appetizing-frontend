import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  FormBuilder, AbstractControl, ValidatorFn} from '@angular/forms';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.Ireland, CountryISO.UnitedKingdom];

  //variable loginForm -> it will be the json { "email" : "", "password" : ""}
  loginForm: any;

  //variable clicked
  clicked = false;

  //login or password / api offline
  errorSign = false;

  //constructor
  //anything will run when access this page or reload
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) { }

  //here it's like a constructor as well, run when page load or reload
  //anything will run when access this page or reload
  ngOnInit(): void {

    //instance the login form and set the validators
    this.loginForm = new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email, Validators.maxLength(60)]),
      name: new FormControl(undefined, [Validators.required,  Validators.minLength(8), Validators.maxLength(40)]),
      phone: new FormControl(undefined, [Validators.required]),
      password: new FormControl(['', [Validators.required, Validators.minLength(6), Validators.minLength(60)]]),
      confirm_password: new FormControl(['', Validators.required])
  }, {
      validators: [this.match('password', 'confirm_password')]
  });
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

  signup()
  {
    if (this.loginForm.valid) {

      
      this.clicked = true;

      let phoneArray = this.loginForm.controls['phone'].value;

      let data = { 
        email: this.loginForm.controls['email'].value, 
        password: this.loginForm.controls['password'].value,
        name: this.loginForm.controls['name'].value,
        phone: phoneArray.e164Number
       };

      this.httpPost("http://localhost:9000/user/", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            this.router.navigate(['login']);
          },
          error => {
            this.errorSign = true;
            this.clicked = false;
            alert('User already exists!');
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      // @ts-ignore: Object is possibly 'null'.
      if (checkControl.errors && !checkControl.errors.matching) {
        return null;
      }
      // @ts-ignore: Object is possibly 'null'.
      if (control.value !== checkControl.value) {
        // @ts-ignore: Object is possibly 'null'.
        controls.get(checkControlName).setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }

  goToLogin()
  {
    this.router.navigate(['login']);
  }

}

