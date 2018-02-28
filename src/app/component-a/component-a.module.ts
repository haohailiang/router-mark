import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentAComponent } from './component-a.component';
import { ComponentARoutingModule } from './component-a-routing.module';

@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    BrowserModule,
    ComponentARoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentAModule { }
