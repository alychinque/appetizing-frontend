import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variable loginForm -> it will be the json { "email" : "", "password" : ""}
  loginForm: any;

  //variable clicked
  clicked = false;

  //api offline
  errorLogin = false;

  //invalid user
  errorCred = false;

  //loader
  loader = false;

  //constructor
  //anything will run when access this page or reload
  constructor(private router: Router, private http: HttpClient) { }

  //here it's like a constructor as well, run when page load or reload
  //anything will run when access this page or reload
  ngOnInit(): void {

    //instance the login form and set the validators
    this.loginForm = new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email, Validators.maxLength(60)]),
      password: new FormControl(undefined, [Validators.required, Validators.maxLength(30)])
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

  login()
  {
    
    if (this.loginForm.valid) {

      this.errorCred = false;

      this.clicked = true;

      let data = { email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value };

      this.httpPost("http://localhost:9000/login/", data).pipe(first())
        .subscribe(
          data => {
            this.errorLogin = false;
          },
          error => {
            this.clicked = false;

            if(error.error.message == "Unauthorized not foundUser.")
            {
              this.errorCred = true;
            }
            else{
              this.errorLogin = true;
            }
            
            
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  recovery()
  {
    alert('Coming soon...')
  }

  signup()
  {
    this.loader = true;
    setTimeout(()=>{                 
      this.router.navigate(['signup']);
  }, 1500);  
  }

}
