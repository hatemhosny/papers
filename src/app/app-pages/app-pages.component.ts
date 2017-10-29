import { Component } from '@angular/core';

import { MENU_ITEMS } from './app-pages-menu';

@Component({
  selector: 'ngx-app-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class AppPagesComponent {

  menu = MENU_ITEMS;

}