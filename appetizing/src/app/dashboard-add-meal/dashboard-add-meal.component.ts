import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-meal',
  templateUrl: './dashboard-add-meal.component.html',
  styleUrls: ['./dashboard-add-meal.component.css']
})
export class DashboardAddMealComponent implements OnInit {

  addMealForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.addMealForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required]),
      items: new FormControl([undefined]),
      allergies: new FormControl([undefined]),
      extras: new FormControl([undefined]),
      status: new FormControl([undefined])
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

  addMeal() {
    if (this.addMealForm.valid) {

      this.clicked = true;

      let data = {
        name: this.addMealForm.controls['name'].value,
        price: this.addMealForm.controls['price'].value,
        items: this.addMealForm.controls['items'].value,
        allergies: this.addMealForm.controls['allergies'].value,
        extras: this.addMealForm.controls['extras'].value,
        status: this.addMealForm.controls['status'].value
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

  dashboardMeal() {
    this.router.navigate(['dashboard-meal']);

  }

}
