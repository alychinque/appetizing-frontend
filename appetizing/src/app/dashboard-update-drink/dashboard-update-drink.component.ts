import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
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

  drinkToUpdate: any;
  drinkId: any;
  
  updateDrinkForm: any;
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

    this.routerActivated.params.subscribe( params => this.drinkId = params['id']);

    this.getDrink(this.drinkId);

    this.updateDrinkForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required]),
      category: new FormControl([undefined]),
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

  updateDrink() {
    if (this.updateDrinkForm.valid) {

      this.clicked = true;

      let data = {
        nameDrink: this.updateDrinkForm.controls['name'].value,
        priceDrink: this.updateDrinkForm.controls['price'].value,
        category: this.updateDrinkForm.controls['category'].value,
        active: this.updateDrinkForm.controls['status'].value
      };

      this.httpUpdate("https://appetizing.herokuapp.com/drink", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('drink updated');
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

  getDrink(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/drink/".concat(id))
      .subscribe(
        data => {
          this.drinkToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

}
