import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutletListPageRoutingModule } from './outlet-list-routing.module';

import { OutletListPage } from './outlet-list.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    OutletListPageRoutingModule,
  ],
  declarations: [OutletListPage]
})
export class OutletListPageModule { }
