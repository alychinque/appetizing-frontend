import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

   dataRecv : any;
   checkOut: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.get();
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
          alert(JSON.stringify(this.dataRecv));
  
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

}
