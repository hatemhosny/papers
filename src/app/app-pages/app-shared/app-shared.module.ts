import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';

import { CardsModule } from './cards/cards.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    RouterModule,
    ThemeModule,
    CardsModule,
    Ng2BreadcrumbModule,
  ],
  declarations: [
    BreadcrumbsComponent,
  ],
  exports: [
    RouterModule,
    CardsModule,
    BreadcrumbsComponent,
  ],
})
export class AppSharedModule { }
