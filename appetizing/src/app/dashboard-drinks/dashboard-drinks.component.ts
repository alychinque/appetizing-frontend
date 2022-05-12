import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Drink } from '../interface/drink';


@Component({
  selector: 'app-dashboard-drinks',
  templateUrl: './dashboard-drinks.component.html',
  styleUrls: ['./dashboard-drinks.component.css']
})
export class DashboardDrinksComponent implements OnInit {

  drink: Drink[] = [];
  drinkCopy: Drink[] = [];

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getDrink();
  }

  httpGet(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      }),
    };

    return this.http.get<any>(url, httpOptions).pipe(map(data => {
      return data;
    }));
  }

  httpDelete(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  getDrink() {
    this.httpGet("https://appetizing.herokuapp.com/drink")
      .subscribe(
        data => {
          this.drink = data;
          this.drinkCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  deleteDrink(data: Drink) {
    this.httpDelete("http://localhost:9000/drink/", data);
  }

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

  dashboardAllergy(){
    this.router.navigate(['dashboard-allergy']);

  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  dashboardAddDrinks(){
    this.router.navigate(['dashboard-add-drink']);
  }

  updateDrink(){
    this.router.navigate(['dashboard-update-drink']);
  }

}
