import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-update-item',
  templateUrl: './dashboard-update-item.component.html',
  styleUrls: ['./dashboard-update-item.component.css']
})
export class DashboardUpdateItemComponent implements OnInit {

  itemId: any;
  itemToUpdate:  any;
  
  updateItemForm: any;
  clicked = false;
  errorSign = false;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private routerActivated: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.routerActivated.params.subscribe( params => this.itemId = params['id']);

    this.getItem(this.itemId);

    this.updateItemForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required]),
      price: new FormControl(undefined, [Validators.required])
     
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

  updateItem() {
    if (this.updateItemForm.valid) {

      this.clicked = true;

      let data = {
        nameItem: this.updateItemForm.controls['name'].value,
        priceItem: this.updateItemForm.controls['price'].value,
        
      };

      this.httpUpdate("https://appetizing.herokuapp.com/item", data).pipe(first())
        .subscribe(
          data => {
            this.errorSign = false;
            alert('item updated');
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

  getItem(id: string) {
    this.httpGet("https://appetizing.herokuapp.com/item/".concat(id))
      .subscribe(
        data => {
          this.itemToUpdate = data;  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardItem(){
    this.router.navigate(['dashboard-items']);

  }
}
