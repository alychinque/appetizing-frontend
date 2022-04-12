import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-drink',
  templateUrl: './dashboard-update-drink.component.html',
  styleUrls: ['./dashboard-update-drink.component.css']
})
export class DashboardUpdateDrinkComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

}
