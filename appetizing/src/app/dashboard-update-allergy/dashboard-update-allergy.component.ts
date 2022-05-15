import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-update-allergy',
  templateUrl: './dashboard-update-allergy.component.html',
  styleUrls: ['./dashboard-update-allergy.component.css']
})
export class DashboardUpdateAllergyComponent implements OnInit {

  token: any = "";
  role: any = null;

  allergyToUpdate: any;
  allergyId: any;
  
  updateAllergyForm: any;
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

    this.routerActivated.params.subscribe( params => this.allergyId = params['id']);

    this.getAllergy(this.allergyId);

    this.updateAllergyForm = new FormGroup({
      allergyName: new FormControl(undefined, [Validators.required]),
      allergyNumber: new FormControl(undefined, [Validators.required]),
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

  updateAllergy() {
    if (this.updateAllergyForm.valid) {

      this.clicked = true;

      let data = {
        id: this.allergyId,
        nameAllergy: this.updateAllergyForm.controls['allergyName'].value,
        numberAllergy: this.updateAllergyForm.controls['allergyNumber'].value,
      };

      this.httpUpdate("https://appetizing.herokuapp.com/allergy", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('allergy updated');
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

  getAllergy(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/allergy/".concat(id))
      .subscribe(
        data => {
          this.allergyToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardAllergy(){
    this.router.navigate(['dashboard-allergy']);

  }

}
