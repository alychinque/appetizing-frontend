import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-item',
  templateUrl: './dashboard-add-item.component.html',
  styleUrls: ['./dashboard-add-item.component.css']
})
export class DashboardAddItemComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardItems(){
    this.router.navigate(['dashboard-items']);

  }

}
