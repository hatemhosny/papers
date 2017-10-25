import { NgModule } from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';

import { FlipCardComponent } from './flip-card/flip-card.component';
import { RevealCardComponent } from './reveal-card/reveal-card.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FlipCardComponent,
    RevealCardComponent,
  ],
  exports: [
    FlipCardComponent,
    RevealCardComponent,
  ],
})
export class AppSharedModule { }
