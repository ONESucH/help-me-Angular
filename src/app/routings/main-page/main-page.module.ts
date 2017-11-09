import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule
  ],
  declarations: [MainPageRoutingModule]
})
export class MainPageModule { }
