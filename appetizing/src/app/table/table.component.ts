import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: any;

  constructor(private routerActivated: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    
    this.routerActivated.params.subscribe( params => this.table = params['id']);

    localStorage.setItem('table',this.table);

    this.router.navigate(['home']);

  }

}
