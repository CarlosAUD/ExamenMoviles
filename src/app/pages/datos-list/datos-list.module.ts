import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosListPageRoutingModule } from './datos-list-routing.module';

import { DatosListPage } from './datos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosListPageRoutingModule
  ],
  declarations: [DatosListPage]
})
export class DatosListPageModule {}
