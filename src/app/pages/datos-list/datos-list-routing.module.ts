import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosListPage } from './datos-list.page';

const routes: Routes = [
  {
    path: '',
    component: DatosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosListPageRoutingModule {}
