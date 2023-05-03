import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/map/map.module').then((m) => m.MapPageModule),
  },

  {
    path: 'outlet-list',
    loadChildren: () =>
      import('./pages/outlet-list/outlet-list.module').then(
        (m) => m.OutletListPageModule
      ),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
