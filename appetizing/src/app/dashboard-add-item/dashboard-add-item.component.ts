import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-add-item',
  templateUrl: './dashboard-add-item.component.html',
  styleUrls: ['./dashboard-add-item.component.css']
})
export class DashboardAddItemComponent implements OnInit {

  addItemForm: any;
  clicked = false;
  errorSign = false;

  token: any = "";
  role: any = null;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }

    this.addItemForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required])
     
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

  addItem() {
    if (this.addItemForm.valid) {

      this.clicked = true;

      let data = {
        nameItem: this.addItemForm.controls['name'].value,
        priceItem: this.addItemForm.controls['price'].value
       
      };

      this.httpPost("http://localhost:9000/item/", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('item added');
          },
          error => {
            alert(JSON.stringify(error))
            this.errorSign = true;
            this.clicked = false;
          });
    }
    else {
      alert("Fill the fields!");
    }
  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

}
