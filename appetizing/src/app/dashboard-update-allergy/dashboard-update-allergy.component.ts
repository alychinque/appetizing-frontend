import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-update-allergy',
  templateUrl: './dashboard-update-allergy.component.html',
  styleUrls: ['./dashboard-update-allergy.component.css']
})
export class DashboardUpdateAllergyComponent implements OnInit {

  token: any = "";
  role: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.token = localStorage.getItem('token');

    if(this.role == 1010)
    {
      alert("This page is restricted.")
      this.router.navigate(['home']);
    }
  }

}
