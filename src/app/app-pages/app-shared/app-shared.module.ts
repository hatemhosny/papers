import { NgModule } from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';

import { FlipCardComponent } from './flip-card/flip-card.component';
import { RevealCardComponent } from './reveal-card/reveal-card.component';
import { CardAccentComponent } from './card-accent/card-accent.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FlipCardComponent,
    RevealCardComponent,
    CardAccentComponent,
  ],
  exports: [
    FlipCardComponent,
    RevealCardComponent,
    CardAccentComponent,
  ],
})
export class AppSharedModule { }
