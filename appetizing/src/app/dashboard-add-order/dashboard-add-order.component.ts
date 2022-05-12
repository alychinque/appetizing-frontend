import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-order',
  templateUrl: './dashboard-add-order.component.html',
  styleUrls: ['./dashboard-add-order.component.css']
})
export class DashboardAddOrderComponent implements OnInit {

  addOrderForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.addOrderForm = new FormGroup({
      tableNumber: new FormControl(undefined, [Validators.required]),
      userId: new FormControl([undefined]),
      meal: new FormControl(undefined, [Validators.required]),
      drinks: new FormControl([undefined]),
      extras: new FormControl([undefined])
    })
  }

  httpPost(url: string, request: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post<any>(url, request, httpOptions).pipe(map((data) => {
      return data;
    }));
  }

  addOrder() {
    if (this.addOrderForm.valid) {

      this.clicked = true;

      let data = {
        tableNumber: this.addOrderForm.controls['tableNumber'].value,
        userId: this.addOrderForm.controls['userId'].value,
        meal: this.addOrderForm.controls['meal'].value,
        drinks: this.addOrderForm.controls['drinks'].value,
        extras: this.addOrderForm.controls['extras'].value
      };

      alert('next alert will be showing the json struct');
      alert(JSON.stringify(data));

      this.httpPost("http://localhost:9000/meal/", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
          },
          error => {
            this.errorSign = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}
