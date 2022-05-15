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

  token: any = "";
  role: any = null;

  allergyTodelete: Allergy[] = [];
  errorSign = false;
  clicked = false;

  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }

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
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateAllergy(_id: string){
    this.router.navigate(['dashboard-update-allergy', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteAllergy(allergy: Allergy) {

    let id = allergy._id 
    
    alert(JSON.stringify(id))
    this.delete(id)
  }

  delete(id: string){
    this.http.delete('https://appetizing.herokuapp.com/allergy/'.concat(id)).pipe(first()).subscribe(
      data => {
        this.errorSign = false;
        alert('allergy deleted');
        this.refresh();
      },
      error => {
        alert(JSON.stringify(error))
        this.errorSign = true;
      });
  }

  refresh(): void {
    window.location.reload();
}

  dashboardHome() {
    this.router.navigate(['dashboard-home']);

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

}
