import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentBComponent } from './component-b.component'

const routes: Routes = [
    { path: 'pathB', component: ComponentBComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentBRoutingModule {}
