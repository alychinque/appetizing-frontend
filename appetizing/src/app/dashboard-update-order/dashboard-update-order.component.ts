import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-order',
  templateUrl: './dashboard-update-order.component.html',
  styleUrls: ['./dashboard-update-order.component.css']
})
export class DashboardUpdateOrderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}
