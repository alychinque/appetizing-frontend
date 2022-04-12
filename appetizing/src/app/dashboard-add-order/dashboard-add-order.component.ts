import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-order',
  templateUrl: './dashboard-add-order.component.html',
  styleUrls: ['./dashboard-add-order.component.css']
})
export class DashboardAddOrderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}
