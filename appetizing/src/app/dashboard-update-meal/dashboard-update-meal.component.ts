import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-meal',
  templateUrl: './dashboard-update-meal.component.html',
  styleUrls: ['./dashboard-update-meal.component.css']
})
export class DashboardUpdateMealComponent implements OnInit {

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


  dashboardMeal(){
    this.router.navigate(['dashboard-meal']);

  }

}
