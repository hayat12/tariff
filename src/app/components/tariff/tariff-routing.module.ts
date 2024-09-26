import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffListingComponent } from './tariff-listing/tariff-listing.component';
import { TariffDetailsComponent } from './tariff-details/tariff-details.component';

const routes: Routes = [
  {
    path: "",
    component: TariffListingComponent
  },
  {
    path: "details/:id",
    component: TariffDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffRoutingModule { }
