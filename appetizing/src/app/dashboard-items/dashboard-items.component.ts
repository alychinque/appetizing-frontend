import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Item } from '../interface/item';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './dashboard-items.component.html',
  styleUrls: ['./dashboard-items.component.css']
})
export class DashboardItemsComponent implements OnInit {

  itemList: Item[] = [];

  errorSign = false;
  clicked = false;
  
  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getItems();
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

  getItems() {
    this.httpGet("https://appetizing.herokuapp.com/item")
      .subscribe(
        data => {
          this.itemList = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateItem(_id: string){
    this.router.navigate(['dashboard-update-item', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteItem(item: Item) {

    let data = { id : item._id }
    
    this.httpDelete("https://appetizing.herokuapp.com/item/", data).pipe(first())
    .subscribe(
      data => {
        this.errorSign = false;
        alert('item deleted');
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

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addItem(){
    this.router.navigate(['dashboard-add-item']);
  }


}
