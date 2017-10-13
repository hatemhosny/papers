import { NbThemeService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

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
export class AppPagesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor(private themeService: NbThemeService) { }

  public ngOnInit(): void {
    this.themeService.changeTheme('default');
  }
}
