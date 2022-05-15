import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, first } from 'rxjs/operators';

import { User } from '../interface/user';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

  userList: User[] = [];
  
  errorSign = false;
  clicked = false;

  token: any = "";
  role: any = null;

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

    this.getUser();
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

  getUser() {
    this.httpGet("https://appetizing.herokuapp.com/user")
      .subscribe(
        data => {
          this.userList = data;
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

  deleteUser(user: User) {

    let id = user._id 
    
    alert(JSON.stringify(id))
    this.delete(id)
  
  }

  delete(id: string){
    this.http.delete('https://appetizing.herokuapp.com/user'.concat(id)).pipe(first()).subscribe(
      data => {
        this.errorSign = false;
        alert('user deleted');
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

}
