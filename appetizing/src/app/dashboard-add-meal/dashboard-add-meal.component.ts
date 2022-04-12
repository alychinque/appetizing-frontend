import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-meal',
  templateUrl: './dashboard-add-meal.component.html',
  styleUrls: ['./dashboard-add-meal.component.css']
})
export class DashboardAddMealComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

}
