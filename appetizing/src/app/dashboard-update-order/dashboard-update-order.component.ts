import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm, AbstractControl, ValidatorFn } from '@angular/forms';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-update-order',
  templateUrl: './dashboard-update-order.component.html',
  styleUrls: ['./dashboard-update-order.component.css']
})
export class DashboardUpdateOrderComponent implements OnInit {

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

  dashboardOrder(){
    this.router.navigate(['dashboard-order']);

  }

}
