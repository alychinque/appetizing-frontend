import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators, MaxValidator } from '@angular/forms';
import { map, first } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ItemsService } from '../service/items.service';
import { Meal, Items, Extras } from '../interface/meal';
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

  table: any = -1;


  constructor(private router: Router, private http: HttpClient, private itemsService: ItemsService) {

  }

  ngOnInit(): void {


    this.checkoutForm = new FormGroup({
      table: new FormControl(undefined, [Validators.required])
    });

    if (localStorage.getItem('table') != null) {

      this.checkoutForm.controls['table'].value = localStorage.getItem('table');
      this.table = this.checkoutForm.controls['table'].value;

    }

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

  httpPost(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         })};

    return this.http.post<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  pay()
  {

    if (this.checkoutForm.valid) {
  
    let data = { 
      meal: this.cartMeal,
      drink: this.cartDrink,
      priceTotal: this.totalPrice,
      table: this.checkoutForm.controls['table'].value,
      idUser: "GUEST"
     }

     this.httpPost("http://localhost:9000/order/", data).pipe(first())
     .subscribe(
       data => {
        localStorage.removeItem('cart')
        localStorage.removeItem('cart-drink')
        this.router.navigate(['orderstatus']);
       },
       error => {
           alert(JSON.stringify(error))
       });

  }
  else{
    alert('SELECT A TABLE FIRST!')
  }
}

}
