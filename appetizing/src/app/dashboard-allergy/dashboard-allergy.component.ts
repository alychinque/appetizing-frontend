import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Allergy } from '../interface/allergy';

@Component({
  selector: 'app-dashboard-allergy',
  templateUrl: './dashboard-allergy.component.html',
  styleUrls: ['./dashboard-allergy.component.css']
})
export class DashboardAllergyComponent implements OnInit {

  allergy: Allergy[] = [];
  allergyCopy: Allergy[] = [];

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllergy();
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

  getAllergy() {
    this.httpGet("https://appetizing.herokuapp.com/allergy")
      .subscribe(
        data => {
          this.allergy = data;
          this.allergyCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addAllergy(){
    this.router.navigate(['dashboard-add-allergy']);
  }

  updateAllergy(){
    this.router.navigate(['dashboard-update-allergy']);
  }

}
