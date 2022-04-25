import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-admin',
  templateUrl: './dashboard-add-admin.component.html',
  styleUrls: ['./dashboard-add-admin.component.css']
})
export class DashboardAddAdminComponent implements OnInit {

  loginForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      fullName: new FormControl(undefined, [Validators.required]),
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl([undefined, [Validators.required, Validators.minLength(6), Validators.minLength(60)]])
    })
  }

  httpPost(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  registerAdmin() {
    if (this.loginForm.valid) {

      this.clicked = true;

      let data = {
        fullName: this.loginForm.controls['fullName'].value,
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value
      };

      alert('next alert will be showing the json struct');
      alert(JSON.stringify(data));

      this.httpPost("https://backend/", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
          },
          error => {
            this.errorSign = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }


  dashboardAdmin() {
    this.router.navigate(['dashboard-admin']);

  }


}