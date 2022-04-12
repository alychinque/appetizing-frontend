import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-meal',
  templateUrl: './dashboard-update-meal.component.html',
  styleUrls: ['./dashboard-update-meal.component.css']
})
export class DashboardUpdateMealComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

}
