import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPageComponent } from './new-page.component';

const routes: Routes = [
    {path: 'new-page', component: NewPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPageRoutingModule { }
