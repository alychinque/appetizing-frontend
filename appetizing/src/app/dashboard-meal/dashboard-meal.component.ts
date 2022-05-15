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

  errorSign = false;
  clicked = false;

  token: any = "";
  role: any = null;

  constructor(private router: Router, private http: HttpClient) {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }
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
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateMeal(_id: string){
    this.router.navigate(['dashboard-update-meal', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteMeal(meal: Meal) {

    let id = meal._id 
    
    alert(JSON.stringify(id))
    this.delete(id)
  
  }

  delete(id: string){
    this.http.delete('https://appetizing.herokuapp.com/meal'.concat(id)).pipe(first()).subscribe(
      data => {
        this.errorSign = false;
        alert('meal deleted');
        this.refresh();
      },
      error => {
        alert(JSON.stringify(error))
        this.errorSign = true;
      });
  }

  refresh(): void {
    window.location.reload();
}

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

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

}
