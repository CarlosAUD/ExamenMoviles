import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListPage } from './app-list.page';

const routes: Routes = [
  {
    path: '',
    component: AppListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppListPageRoutingModule {}
