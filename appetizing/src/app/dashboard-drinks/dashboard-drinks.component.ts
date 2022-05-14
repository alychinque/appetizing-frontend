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

  drinkList: Drink[] = [];
  drinkCopy: Drink[] = [];


  token: any = "";
  role: any = null;
  
  errorSign = false;
  clicked = false;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }

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

  getDrink() {
    this.httpGet("https://appetizing.herokuapp.com/drink")
      .subscribe(
        data => {
          this.drinkList = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateDrink(_id: string){
    this.router.navigate(['dashboard-update-drink', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteDrink(drink: Drink) {

    let data = { id : drink._id }
    
    this.httpDelete("https://appetizing.herokuapp.com/drink/", data).pipe(first())
    .subscribe(
      data => {
        this.errorSign = false;
        alert('drink deleted');
      },
      error => {
        alert(JSON.stringify(error))
        this.errorSign = true;
      });
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

}
