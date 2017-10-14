import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ToasterModule } from 'angular2-toaster';

import { throwIfAlreadyLoaded } from '../../@core/module-import-guard';
import { NotificationService } from './notification/notification.service';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    ToasterModule,
  ],
  exports: [
    NotificationComponent,
  ],
  declarations: [
    NotificationComponent,
  ],
  providers: [
    NotificationService,
  ],

})
export class AppCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'AppCoreModule');
  }

}
