import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "tariff",
    loadChildren: ()=>import("src/app/components/tariff/tariff.module").then((m)=>m.TariffModule)
  },
  {
    path: "**",
    redirectTo: "tariff"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
