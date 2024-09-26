import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffRoutingModule } from './tariff-routing.module';
import { TariffListingFilteredComponent } from './tariff-listing/tariff-listing-filtered.component';
import { TariffListingComponent } from './tariff-listing/tariff-listing.component';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';


@NgModule({
  declarations: [
    TariffListingFilteredComponent,
    TariffListingComponent,
    TariffDetailsComponent
  ],
  imports: [
    CommonModule,
    TariffRoutingModule
  ]
})
export class TariffModule { }
