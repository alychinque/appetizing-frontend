import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-drink',
  templateUrl: './dashboard-add-drink.component.html',
  styleUrls: ['./dashboard-add-drink.component.css']
})
export class DashboardAddDrinkComponent implements OnInit {

  addDrinkForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.addDrinkForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required]),
      category: new FormControl([undefined]),
      status: new FormControl([undefined])
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

  addDrink() {
    if (this.addDrinkForm.valid) {

      this.clicked = true;

      let data = {
        name: this.addDrinkForm.controls['name'].value,
        price: this.addDrinkForm.controls['price'].value,
        category: this.addDrinkForm.controls['category'].value,
        status: this.addDrinkForm.controls['status'].value
      };

      alert('next alert will be showing the json struct');
      alert(JSON.stringify(data));

      this.httpPost("http://localhost:9000/drink", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('drink added');
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

  dashboardDrinks() {
    this.router.navigate(['dashboard-drinks']);

  }

}
