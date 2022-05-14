import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';
import { Admin } from '../interface/admin';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  adminList: Admin[] = [];

  errorSign = false;
  clicked = false;
  
  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAdmin();
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

  getAdmin() {
    this.httpGet("https://appetizing.herokuapp.com/admin")
      .subscribe(
        data => {
          this.adminList = data;
        },
        error => {
          alert(JSON.stringify(error));
        });
  }

  updateAdmin(_id: string){
    this.router.navigate(['dashboard-update-admin', _id]);
  }

  httpDelete(url: string, request: any) {

    return this.http.delete<any>(url, request).pipe(map((data) => {
      return data;
    }));
  }

  deleteAdmin(admin: Admin) {

    let data = { id : admin._id }
    
    this.httpDelete("https://appetizing.herokuapp.com/admin/", data).pipe(first())
    .subscribe(
      data => {
        this.errorSign = false;
        alert('admin deleted');
      },
      error => {
        alert(JSON.stringify(error))
        this.errorSign = true;
      });
  }

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

  }

  dashboardAllergy(){
    this.router.navigate(['dashboard-allergy']);

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

  addAdmin(){
    this.router.navigate(['dashboard-add-admin']);
  }


}
