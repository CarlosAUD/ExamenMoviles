import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailListPageRoutingModule } from './detail-list-routing.module';

import { DetailListPage } from './detail-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailListPageRoutingModule
  ],
  declarations: [DetailListPage]
})
export class DetailListPageModule {}
