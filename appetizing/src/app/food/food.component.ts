import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../service/items.service';
import { Meal, Items, Extras } from '../interface/meal';
import { CompileTypeMetadata } from '@angular/compiler';
import { Drink } from '../interface/drink';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  dataRecv: Meal[] = [];
  dataRecvCopy: Meal[] = [];

  dataRecvDrink: Drink[] = [];
  dataRecvCopyDrink: Drink[] = [];

  meal: Meal[] = [];
  cartMeal: Meal[] = [];
  cartDrink: Drink[] = [];
  optMeal: Meal[] = [];
  mealCollection: Meal = <Meal>{};

  totalQuantity: number = 0;
  totalPrice: number = 0;

  clickDrink: boolean = false;

  change: boolean = false;

//loader
loader = false;

  constructor(private router: Router, private http: HttpClient, private itemsService: ItemsService, private routerActivated: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.get();
    this.getDrink();
    this.addCartEvent();

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

    this.routerActivated.params.subscribe( params => params['id'] == "0" ? this.clickDrink = false : this.clickDrink = true);
  }

  addCartEvent() {
      this.sum();
  }

  deleteItem(_id: string) {
    let index = this.cartMeal.findIndex(item => item._id === _id);
    this.cartMeal.splice(index, 1);
    this.sum();
    localStorage.setItem('cart', JSON.stringify(this.cartMeal));
  }

  deleteItemDrink(_id: string) {
    let index = this.cartDrink.findIndex(item => item._id === _id);
    this.cartDrink.splice(index, 1);
    this.sum();
    localStorage.setItem('cart-drink', JSON.stringify(this.cartDrink));
  }

  updateElement(extras: Extras, meal: Meal, indexExtra: number, indexMeal: number): void {
    let index = -1;
    index = this.optMeal.findIndex(
      p => p._id === meal._id
    );
    if (index != -1) {
      
      this.dataRecv[indexMeal] = this.optMeal[index];

    } else if (index === -1) {
     this.mealCollection = meal;
     this.mealCollection.extras[indexExtra].checked = true;
     this.optMeal.push(this.mealCollection);
     this.mealCollection = <Meal>{};
    }
  }

  addCart(meal: Meal): void {
    this.itemsService.event.emit(meal);
    meal.quantity = 1;
    this.cartMeal.push(meal);
    this.sum();
    localStorage.setItem('cart', JSON.stringify(this.cartMeal));
  }

  addCartDrink(drink: Drink): void {
    drink.quantity = 1;
    this.cartDrink.push(drink);
    this.sum();
    localStorage.setItem('cart-drink', JSON.stringify(this.cartDrink));
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
    this.dataRecv = this.dataRecvCopy;
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
    this.httpGet("https://appetizing.herokuapp.com/meal")
      .subscribe(
        data => {

          this.dataRecv = data;

          for (let i = 0; i < this.dataRecv.length; i++) {
            for (let j = 0; j < this.dataRecv[i].extras.length; j++) {
            data[i].extras[j].checked = false;
            }
          }

          this.dataRecv = data;
          this.dataRecvCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  
  getDrink() {
    this.httpGet("https://appetizing.herokuapp.com/drink")
      .subscribe(
        data => {
          this.dataRecvDrink = data;
          this.dataRecvCopyDrink = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  login() {
    this.loader = true;
   setTimeout(()=>{                 
     this.router.navigate(['login']);
 }, 1500);  
  }
  
  signup() {
   this.loader = true;
   setTimeout(()=>{                 
     this.router.navigate(['signup']);
 }, 1500);  
 }
 
 foodOrDrink(id:string) {
   this.loader = true;
   setTimeout(()=>{                 
     this.router.navigate(['food', id]);
 }, 1500);  
 }
 
 home(){
   this.loader = true;
   setTimeout(()=>{                 
     this.router.navigate(['home']);
 }, 1500);  
 }
 
 checkout(){
   this.loader = true;
   setTimeout(()=>{                 
     this.router.navigate(['checkout']);
 }, 1500);  
 }

  clickMenuAction1()
  {
    this.change = true;
    setTimeout(()=>{                 
      this.clickDrink = false;
      this.change = false;
  }, 1500);  
  }
  clickMenuAction2()
  {
    this.change = true;
    setTimeout(()=>{                 
      this.clickDrink = true;
      this.change = false;
  }, 1500);  
  }

}
