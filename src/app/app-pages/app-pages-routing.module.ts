import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppPagesComponent } from './app-pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [{
  path: '',
  component: AppPagesComponent,
  children: [{
    path: '',
    component: DashboardComponent,
  }, {
    path: 'sample',
    component: SampleComponent,
  }, {
    path: 'dashboard',
    redirectTo: '',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppPagesRoutingModule {
}
