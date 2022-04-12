import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-items',
  templateUrl: './dashboard-items.component.html',
  styleUrls: ['./dashboard-items.component.css']
})
export class DashboardItemsComponent implements OnInit {

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

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

  dashboardUser(){
    this.router.navigate(['dashboard-user']);

  }

  addItem(){
    this.router.navigate(['dashboard-add-item']);
  }

  updateItem(){
    this.router.navigate(['dashboard-update-item']);
  }

}
