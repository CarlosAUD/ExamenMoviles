import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppListPageRoutingModule } from './app-list-routing.module';

import { AppListPage } from './app-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppListPageRoutingModule
  ],
  declarations: [AppListPage]
})
export class AppListPageModule {}
