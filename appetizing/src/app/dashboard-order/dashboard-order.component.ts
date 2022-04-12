import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.css']
})
export class DashboardOrderComponent implements OnInit {

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

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addOrder(){
    this.router.navigate(['dashboard-add-order']);
  }

  updateOrder(){
    this.router.navigate(['dashboard-update-order']);
  }

}
