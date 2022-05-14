import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-update-meal',
  templateUrl: './dashboard-update-meal.component.html',
  styleUrls: ['./dashboard-update-meal.component.css']
})
export class DashboardUpdateMealComponent implements OnInit {

  token: any = "";
  role: any = null;

  mealToUpdate: any;
  mealId: any;
  
  updateMealForm: any;
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

    this.routerActivated.params.subscribe( params => this.mealId = params['id']);

    this.getMeal(this.mealId);

    this.updateMealForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required]),
      items: new FormControl([undefined]),
      allergies: new FormControl([undefined]),
      extras: new FormControl([undefined]),
      status: new FormControl([undefined])
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

  updateMeal() {
    if (this.updateMealForm.valid) {

      this.clicked = true;

      let data = {
        nameMeal: this.updateMealForm.controls['name'].value,
        priceMeal: this.updateMealForm.controls['price'].value,
        items: this.updateMealForm.controls['items'].value,
        allergies: this.updateMealForm.controls['allergies'].value,
        extras: this.updateMealForm.controls['extras'].value,
        active: this.updateMealForm.controls['status'].value
      };

      this.httpUpdate("https://appetizing.herokuapp.com/meal", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('meal updated');
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

  getMeal(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/meal/".concat(id))
      .subscribe(
        data => {
          this.mealToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

}
