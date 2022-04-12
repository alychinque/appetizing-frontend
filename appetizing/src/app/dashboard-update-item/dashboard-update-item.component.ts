import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-item',
  templateUrl: './dashboard-update-item.component.html',
  styleUrls: ['./dashboard-update-item.component.css']
})
export class DashboardUpdateItemComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardItem(){
    this.router.navigate(['dashboard-items']);

  }
}
