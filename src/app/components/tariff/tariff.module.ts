import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffRoutingModule } from './tariff-routing.module';
import { TariffListingFilteredComponent } from './tariff-listing/tariff-listing-filtered.component';
import { TariffListingComponent } from './tariff-listing/tariff-listing.component';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';
import { SortTagComponent } from 'src/app/shared/sort-tag/sort-tag.component';
import { TariffCardComponent } from 'src/app/shared/tariff-card/tariff-card.component';


@NgModule({
  declarations: [
    TariffListingFilteredComponent,
    TariffListingComponent,
    TariffDetailsComponent
  ],
  imports: [
    CommonModule,
    SortTagComponent,
    TariffCardComponent,
    TariffRoutingModule
  ]
})
export class TariffModule { }
