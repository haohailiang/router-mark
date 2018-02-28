import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentBComponent } from './component-b.component';
import { ComponentBRoutingModule} from './component-b-routing.module';

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  imports: [
    BrowserModule,
    ComponentBRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentBModule { }
