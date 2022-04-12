import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-add-admin',
  templateUrl: './dashboard-add-admin.component.html',
  styleUrls: ['./dashboard-add-admin.component.css']
})
export class DashboardAddAdminComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) {
  }

  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }
  
}