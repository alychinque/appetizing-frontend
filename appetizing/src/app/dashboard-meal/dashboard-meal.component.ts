import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Meal } from '../interface/meal';

@Component({
  selector: 'app-dashboard-meal',
  templateUrl: './dashboard-meal.component.html',
  styleUrls: ['./dashboard-meal.component.css']
})
export class DashboardMealComponent implements OnInit {

  mealList: Meal[] = [];
  mealCopy: Meal[] = [];

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getMeal();
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

  getMeal() {
    this.httpGet("https://appetizing.herokuapp.com/meal")
      .subscribe(
        data => {
          this.mealList = data;
          this.mealCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteMeal(data: Meal) {
    alert(JSON.stringify(data));
    this.httpDelete("http://localhost:9000/meal/", data);
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
  
  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addMeal(){
    this.router.navigate(['dashboard-add-meal']);
  }

  updateMeal(){
    this.router.navigate(['dashboard-update-meal']);
  }
}
