import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }

 login() {
       this.router.navigate(['login']);
 }
 
 signup() {
   this.router.navigate(['signup']);
}

food() {
  this.router.navigate(['food']);
}

}
