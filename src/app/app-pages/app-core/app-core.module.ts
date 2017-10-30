import { ErrorHandler, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

import { throwIfAlreadyLoaded } from '../../@core/module-import-guard';
import { AppCoreComponent } from './app-core.component';
import { NotificationService } from './notification/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { LogService } from './log/log.service';
import { DataService } from './data/data.service';

@NgModule({
  imports: [
    ToasterModule,
  ],
  exports: [
    AppCoreComponent,
  ],
  declarations: [
    NotificationComponent,
    AppCoreComponent,
  ],
  providers: [
    NotificationService,
    LogService,
    { provide: ErrorHandler, useExisting: LogService },
    DataService,
    BreadcrumbService,
  ],

})
export class AppCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'AppCoreModule');
  }

}
