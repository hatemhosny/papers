import { NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { AppPagesRoutingModule } from './app-pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    AppPagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    AppPagesComponent,
    HomeComponent,
  ],
})
export class AppPagesModule {
}
