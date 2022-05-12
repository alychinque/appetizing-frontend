import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-allergy',
  templateUrl: './dashboard-add-allergy.component.html',
  styleUrls: ['./dashboard-add-allergy.component.css']
})
export class DashboardAddAllergyComponent implements OnInit {

  addAllergyForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.addAllergyForm = new FormGroup({
      allergyName: new FormControl(undefined, [Validators.required]),
      allergyNumber: new FormControl(undefined, [Validators.required]),
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

  addAllergy() {
    if (this.addAllergyForm.valid) {

      this.clicked = true;

      let data = {
        allergyName: this.addAllergyForm.controls['allergyName'].value,
        allergyNumber: this.addAllergyForm.controls['allergyNumber'].value,
      };

      alert('next alert will be showing the json struct');
      alert(JSON.stringify(data));

      this.httpPost("http://localhost:9000/allergy/", data).pipe(first())
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


  dashboardAllergy() {
    this.router.navigate(['dashboard-allergy']);

  }
}