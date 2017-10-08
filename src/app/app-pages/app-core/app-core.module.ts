import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '../../@core/module-import-guard';

@NgModule({
  imports: [

  ],
  exports: [
  ],
  declarations: [],
})
export class AppCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    throwIfAlreadyLoaded(parentModule, 'AppCoreModule');
  }

}
