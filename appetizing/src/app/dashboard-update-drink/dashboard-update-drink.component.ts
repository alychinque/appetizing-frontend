import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { Drink } from '../interface/drink';

@Component({
  selector: 'app-dashboard-update-drink',
  templateUrl: './dashboard-update-drink.component.html',
  styleUrls: ['./dashboard-update-drink.component.css']
})
export class DashboardUpdateDrinkComponent implements OnInit {

  token: any = "";
  role: any = null;

  drinkToUpdate: Drink | undefined;
  
  updateDrinkForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder ) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }

    this.updateDrinkForm = new FormGroup({
      name: new FormControl(this.drinkToUpdate?.nameDrink, [Validators.required]),
      price: new FormControl(this.drinkToUpdate?.priceDrink, [Validators.required]),
      category: new FormControl([this.drinkToUpdate?.category]),
      status: new FormControl([this.drinkToUpdate?.status])
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

  updateDrink() {
    if (this.updateDrinkForm.valid) {

      this.clicked = true;

      let data = {
        name: this.updateDrinkForm.controls['name'].value,
        price: this.updateDrinkForm.controls['price'].value,
        category: this.updateDrinkForm.controls['category'].value,
        status: this.updateDrinkForm.controls['status'].value
      };

     alert(this.updateDrinkForm.controls['status'].value)

      this.httpUpdate("http://localhost:9000/drink", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('drink updated');
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

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

}
