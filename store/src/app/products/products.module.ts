import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ListingComponent } from './listing/listing.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsComponent,
    SearchBarComponent,
    FilterPanelComponent,
    ListingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    HttpClientModule,
  ]
})
export class ProductsModule { }
