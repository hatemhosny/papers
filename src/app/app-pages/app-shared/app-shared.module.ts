import {ThemeModule} from '../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { FlipCardComponent } from './flip-card/flip-card.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FlipCardComponent,
  ],
  exports: [
    FlipCardComponent,
  ],
})
export class AppSharedModule { }
