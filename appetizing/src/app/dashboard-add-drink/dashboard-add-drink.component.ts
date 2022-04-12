import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-drink',
  templateUrl: './dashboard-add-drink.component.html',
  styleUrls: ['./dashboard-add-drink.component.css']
})
export class DashboardAddDrinkComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardDrinks(){
    this.router.navigate(['dashboard-drinks']);

  }

}
