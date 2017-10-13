import { NgModule } from '@angular/core';

import {AppSharedModule} from '../app-shared';
import { PapersRoutingModule } from './papers-routing.module';
import { PapersComponent } from './papers.component';
import { PaperListComponent } from './paper-list/paper-list.component';

@NgModule({
  imports: [
    AppSharedModule,
    PapersRoutingModule,
  ],
  declarations: [
    PapersComponent,
    PaperListComponent,
  ],
})
export class PapersModule { }
