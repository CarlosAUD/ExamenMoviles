import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/app-list/app-list.module').then( m => m.AppListPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'app-list',
    loadChildren: () => import('./pages/app-list/app-list.module').then( m => m.AppListPageModule)
  },  
  { path: '', redirectTo: 'app-list', pathMatch: 'full' },
  { path: 'app-list', loadChildren: () => import('./pages/app-list/app-list.module').then(m => m.AppListPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
