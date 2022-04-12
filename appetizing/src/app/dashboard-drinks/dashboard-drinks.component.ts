import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-drinks',
  templateUrl: './dashboard-drinks.component.html',
  styleUrls: ['./dashboard-drinks.component.css']
})
export class DashboardDrinksComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardHome(){
    this.router.navigate(['dashboard-home']);

  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

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

  dashboardAddDrinks(){
    this.router.navigate(['dashboard-add-drink']);
  }

  updateDrink(){
    this.router.navigate(['dashboard-update-drink']);
  }

}
