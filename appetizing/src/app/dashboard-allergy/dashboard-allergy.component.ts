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

  allergyList: Allergy[] = [];
  allergyCopy: Allergy[] = [];

  allergyTodelete: Allergy[] = [];
  errorSign = false;
  clicked = false;

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
          this.allergyList = data;
          this.allergyCopy = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteAllergy(data: Allergy) {
    alert(JSON.stringify(data));
    this.httpDelete("http://localhost:9000/allergy/", data);
  }

  dashboardHome() {
    this.router.navigate(['dashboard-home']);

  }

  dashboardAdmin() {
    this.router.navigate(['dashboard-admin']);

  }

  dashboardDrinks() {
    this.router.navigate(['dashboard-drinks']);

  }

  dashboardItems() {
    this.router.navigate(['dashboard-items']);

  }

  dashboardMeal() {
    this.router.navigate(['dashboard-meal']);

  }

  dashboardOrder() {
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser() {
    this.router.navigate(['dashboard-user']);

  }

  addAllergy() {
    this.router.navigate(['dashboard-add-allergy']);
  }

  updateAllergy() {
    this.router.navigate(['dashboard-update-allergy']);
  }

}
