import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MapPage as MapPage } from './map.page';
import { MapPageRoutingModule } from './map-routing.module';
import { FooterbarComponent } from 'src/app/components/footerbar/footerbar.component';
import { SearchRadiusComponent } from 'src/app/components/search-radius/search-radius.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MapPage, FooterbarComponent, SearchRadiusComponent]
})
export class MapPageModule {
}
