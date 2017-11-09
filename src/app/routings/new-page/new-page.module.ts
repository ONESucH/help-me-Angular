import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPageRoutingModule } from './new-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewPageRoutingModule
  ],
  declarations: [NewPageRoutingModule]
})
export class NewPageModule { }
