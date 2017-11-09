import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

const routes: Routes = [
    {path: 'about-me', component: AboutMeComponent} // path - название пути(название папки); component - импортируем компоненту
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
