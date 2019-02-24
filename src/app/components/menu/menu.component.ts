import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Users',
        icon: 'fa fa-user',
        routerLink: '/users'
      },
      {
        label: 'Roles',
        icon: 'fa fa-users',
        routerLink: '/roles'
      }
    ];
  }
}
