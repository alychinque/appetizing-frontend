import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

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

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}
