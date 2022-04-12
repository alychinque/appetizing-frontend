import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-admin',
  templateUrl: './dashboard-update-admin.component.html',
  styleUrls: ['./dashboard-update-admin.component.css']
})
export class DashboardUpdateAdminComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

}
