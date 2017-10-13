import { NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppPagesRoutingModule } from './app-pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SampleComponent } from './sample/sample.component';

const APP_PAGES_COMPONENTS = [
  AppPagesComponent,
];

@NgModule({
  imports: [
    AppPagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...APP_PAGES_COMPONENTS,
    SampleComponent,
  ],
})
export class AppPagesModule {
}
