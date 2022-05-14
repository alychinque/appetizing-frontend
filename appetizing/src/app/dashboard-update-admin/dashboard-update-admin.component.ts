import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Admin } from '../interface/admin';

@Component({
  selector: 'app-dashboard-update-admin',
  templateUrl: './dashboard-update-admin.component.html',
  styleUrls: ['./dashboard-update-admin.component.css']
})
export class DashboardUpdateAdminComponent implements OnInit {

  token: any = "";
  role: any = null;

  adminToUpdate: any;
  adminId: any;
  
  updateAdminForm: any;
  clicked = false;
  errorSign = false;
  
  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private routerActivated: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }

    this.routerActivated.params.subscribe( params => this.adminId = params['id']);

    this.getAdmin(this.adminId);

    this.updateAdminForm = new FormGroup({
      fullName: new FormControl(undefined, [Validators.required]),
      username: new FormControl(undefined, [Validators.required]),
      password: new FormControl([undefined, [Validators.required, Validators.minLength(6), Validators.minLength(60)]])
    })
  }

  httpUpdate(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.put<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  updateAdmin() {
    if (this.updateAdminForm.valid) {

      this.clicked = true;

      let data = {
        fullName: this.updateAdminForm.controls['fullName'].value,
        username: this.updateAdminForm.controls['username'].value,
        password: this.updateAdminForm.controls['password'].value
      };

      this.httpUpdate("https://appetizing.herokuapp.com/admin", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('admin updated');
          },
          error => {
            alert(JSON.stringify(error));
            this.errorSign = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  httpGet(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      })
    };

    return this.http.get<any>(url, httpOptions).pipe(map(data => {
      return data;
    }));
  }

  getAdmin(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/admin/".concat(id))
      .subscribe(
        data => {
          this.adminToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

}
