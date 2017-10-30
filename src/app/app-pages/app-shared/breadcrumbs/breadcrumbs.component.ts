import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'pfm-breadcrumbs',
  template: `<pfm-card><breadcrumb prefix="Home"></breadcrumb></pfm-card>`,
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    // this.breadcrumbService.addFriendlyNameForRoute('/home', 'Home');
    // this.breadcrumbService.addFriendlyNameForRoute('/papers', 'All papers');
    // this.breadcrumbService.addFriendlyNameForRouteRegex('/home/users/[0-9]/info', 'Information');

    this.breadcrumbService.hideRoute('/home');
    // this.breadcrumbService.hideRouteRegex('^/home/secret/[a-zA-Z]');

  }

}
