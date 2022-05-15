import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  token: any = "";
  role: any = null;


  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }
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

}
