import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{
  path: '',
  component: AppPagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'sample',
    component: SampleComponent,
  }, {
    path: 'ui-features',
    loadChildren: '../pages/ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: '../pages/components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: '../pages/maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: '../pages/charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: '../pages/editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: '../pages/forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: '../pages/tables/tables.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPagesRoutingModule {
}
