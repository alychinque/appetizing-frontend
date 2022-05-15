import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-update-order',
  templateUrl: './dashboard-update-order.component.html',
  styleUrls: ['./dashboard-update-order.component.css']
})
export class DashboardUpdateOrderComponent implements OnInit {

  orderId: any;
  orderToUpdate:  any;
  
  updateOrderForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private routerActivated: ActivatedRoute ) {
  }

  ngOnInit(): void {

    this.routerActivated.params.subscribe( params => this.orderId = params['id']);

    this.getOrder(this.orderId);

    this.updateOrderForm = new FormGroup({
      tableNumber: new FormControl(undefined, [Validators.required]),
      userId: new FormControl([undefined]),
      food: new FormControl([undefined]),
      drink: new FormControl([undefined]),
      date: new FormControl([undefined]),
      price: new FormControl([undefined]),
      status: new FormControl([undefined])
    })
  }

  httpUpdate(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.put<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  updateOrder() {
    if (this.updateOrderForm.valid) {

      this.clicked = true;

      let data = {
        id:this.orderId,
        idUser: this.updateOrderForm.controls['userId'].value,
        meal: this.updateOrderForm.controls['food'].value,
        drink: this.updateOrderForm.controls['drink'].value,
        table: this.updateOrderForm.controls['tableNumber'].value,
        priceTotal: this.updateOrderForm.controls['price'].value,
        status: this.updateOrderForm.controls['status'].value,
        date: this.updateOrderForm.controls['date'].value
      };

      this.httpUpdate("https://appetizing.herokuapp.com/order", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('order updated');
          },
          error => {
            alert(JSON.stringify(error));
            this.errorSign = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  httpGet(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
      })
    };

    return this.http.get<any>(url, httpOptions).pipe(map(data => {
      return data;
    }));
  }

  getOrder(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/order/".concat(id))
      .subscribe(
        data => {
          this.orderToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}