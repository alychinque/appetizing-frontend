import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.css']
})
export class DashboardLoginComponent implements OnInit {

  loginForm: any;

  //variable clicked
  clicked = false;

  //login or password / api offline
  errorLogin = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl(undefined, [Validators.required, Validators.email, Validators.maxLength(60)]),
      password: new FormControl(undefined, [Validators.required, Validators.maxLength(30)])
    });
  }

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

      this.clicked = true;

      let data = { email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value };

      this.httpPost("https://backend/", data).pipe(first())
        .subscribe(
          data => {
            this.errorLogin = false;
          },
          error => {
            this.errorLogin = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  recovery()
  {
    this.router.navigate(['recovery']);
  }

}
