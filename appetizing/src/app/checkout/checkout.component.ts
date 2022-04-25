import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { map, first } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ItemsService } from '../service/items.service';
import { Meal, Items, Extras } from '../interface/meal';
import { CompileTypeMetadata } from '@angular/compiler';
import { Drink } from '../interface/drink';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartMeal: Meal[] = [];
  cartDrink: Drink[] = [];
  optMeal: Meal[] = [];
  mealCollection: Meal = <Meal>{};

  totalQuantity: number = 0;
  totalPrice: number = 0;


  checkoutForm: any;


  constructor(private router: Router, private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit(): void {
    if(localStorage.getItem('cart') != null){
      var getObj = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('cart') || '{}')));
      this.cartMeal = getObj;

      if(this.cartMeal.length > 0)
      {
        this.sum();
      }
    }
    if(localStorage.getItem('cart-drink') != null){
      var getObj = JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem('cart-drink') || '{}')));
      this.cartDrink = getObj;

      if(this.cartDrink.length > 0)
      {
        this.sum();
      }
    }
  }


  deleteItem(_id: string) {
    let index = this.cartMeal.findIndex(item => item._id === _id);
    this.cartMeal.splice(index, 1);
    this.sum();
    localStorage.setItem('cart', JSON.stringify(this.cartMeal));

    if(this.cartDrink.length <= 0 && this.cartMeal.length <= 0)
    {
      this.router.navigate(['home']);
    }
  }

  deleteItemDrink(_id: string) {
    let index = this.cartDrink.findIndex(item => item._id === _id);
    this.cartDrink.splice(index, 1);
    this.sum();
    localStorage.setItem('cart-drink', JSON.stringify(this.cartDrink));

    if(this.cartDrink.length <= 0 && this.cartMeal.length <= 0)
    {
      this.router.navigate(['home']);
    }
  }

  sum(): void {
    this.totalQuantity = 0;
    this.totalPrice = 0;
    if (this.cartMeal) {
      this.cartMeal.map(product => {
        this.totalQuantity += product.quantity;
        this.totalPrice += product.priceMeal * product.quantity;
      });
    }
    if (this.cartDrink) {
      this.cartDrink.map(product => {
        this.totalQuantity += product.quantity;
        this.totalPrice += product.priceDrink * product.quantity;
      });
    }
  }

}
