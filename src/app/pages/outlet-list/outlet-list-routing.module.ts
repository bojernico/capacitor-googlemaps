import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletListPage } from './outlet-list.page';

const routes: Routes = [
  {
    path: '',
    component: OutletListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletListPageRoutingModule {}
