import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Admin } from '../interface/admin';

@Component({
  selector: 'app-dashboard-update-admin',
  templateUrl: './dashboard-update-admin.component.html',
  styleUrls: ['./dashboard-update-admin.component.css']
})
export class DashboardUpdateAdminComponent implements OnInit {

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



  dashboardAdmin(){
    this.router.navigate(['dashboard-admin']);

  }

}
