import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Order } from '../interface/order';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.css']
})
export class DashboardOrderComponent implements OnInit {

  order: Order[] = [];
  orderCopy: Order[] = [];

   constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getOrder();
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

  getOrder() {
    this.httpGet("https://appetizing.herokuapp.com/drink")
      .subscribe(
        data => {
          this.order = data;
          this.orderCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addOrder(){
    this.router.navigate(['dashboard-add-order']);
  }

  updateOrder(){
    this.router.navigate(['dashboard-update-order']);
  }

}
