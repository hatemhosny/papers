import { NgModule } from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';

import { CardsModule } from './cards/cards.module';

@NgModule({
  imports: [
    ThemeModule,
    CardsModule,
  ],
  declarations: [
  ],
  exports: [
    CardsModule,
  ],
})
export class AppSharedModule { }
