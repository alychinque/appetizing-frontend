import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ItemsService } from '../service/items.service';
import { IItems } from '../interface/items';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  dataRecv: any;

  items: IItems[] = [];
  cartItems: IItems[] = [];

  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private router: Router, private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit(): void {
    this.get();
    this.addCartEvent();
  }

  addCartEvent() {
    this.itemsService.event.subscribe(items => {
      let index = -1;
      index = this.cartItems.findIndex(
        p => p._id === items._id
      );
      if (index != -1) {
        this.cartItems[index].quantity += 1;
      } else if (index === -1) {
        items.quantity = 1;
        this.cartItems.push(items);

      }
      this.sum();
    });
  }

  deleteItem(_id: string) {
    let index = this.cartItems.findIndex(item => item._id === _id);
    this.cartItems.splice(index, 1);
    this.sum();
  }

  updateCart(updateItems: IItems): void {
    alert(JSON.stringify(updateItems));
  }

  addCart(items: IItems): void {
    this.itemsService.event.emit(items);
  }

  sum(): void {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    if (this.cartItems) {
      this.cartItems.map(product => {
        this.totalQuantity += product.quantity;
        this.totalPrice += product.priceMeal * product.quantity;
      });
    }
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

  get() {


    this.httpGet("http://localhost:9000/meal")
      .subscribe(
        data => {
          this.dataRecv = data;

        },
        error => {
          alert(JSON.stringify(error));
        });
  }

}
