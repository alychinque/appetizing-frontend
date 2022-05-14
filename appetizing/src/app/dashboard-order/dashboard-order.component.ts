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

  orderList: Order[] = [];
 
  errorSign = false;
  clicked = false;

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
    this.httpGet("https://appetizing.herokuapp.com/order")
      .subscribe(
        data => {
          this.orderList = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateOrder(_id: string){
    this.router.navigate(['dashboard-update-order', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteOrder(order: Order) {

    let data = { id : order._id }
    
    this.httpDelete("https://appetizing.herokuapp.com/order/", data).pipe(first())
    .subscribe(
      data => {
        this.errorSign = false;
        alert('order deleted');
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


}
