import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardLogin(){
    this.router.navigate(['dashboard-login']);

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

}
