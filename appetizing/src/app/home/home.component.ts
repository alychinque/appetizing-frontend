import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Meal} from '../interface/meal';
import { Drink } from '../interface/drink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartMeal: Meal[] = [];
  cartDrink: Drink[] = [];

  totalQuantity: number = 0;
  totalPrice: number = 0;

    //loader
    loader = false;

    userLogged = false;
    userLogouting = false;

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

    if(localStorage.getItem('token') != null)
    {
      this.userLogged = true;
    }
    else{
      this.userLogged = false;
    }
  }

  constructor(private router: Router) {

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
    this.loader = false;
}, 1500);  
}

checkout(){
  this.loader = true;
  setTimeout(()=>{                 
    this.router.navigate(['checkout']);
}, 1500);  
}

logout(){

  this.userLogouting = true;

  setTimeout(()=>{            
    this.userLogged = false;     
    this.userLogouting = false;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
}, 1500);  
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
