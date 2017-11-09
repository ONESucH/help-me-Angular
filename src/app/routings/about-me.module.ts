import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';

@NgModule({
  imports: [ /* экспортирут объявления */
    CommonModule,
    AboutMeRoutingModule
  ],
  declarations: [ /* сделает директивы (включая компоненты и трубы) от текущего модуля доступными для других директив в текущем модуле */
      AboutMeRoutingModule
  ]
})
export class AboutMeModule { }
