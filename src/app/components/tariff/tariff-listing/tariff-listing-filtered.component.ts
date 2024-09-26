import { Component, Input } from '@angular/core';
import { Sort } from 'src/app/interfaces/sort';
import { Tariff } from 'src/app/interfaces/tariff.interface';

@Component({
  selector: 'app-tariff-listing-filtered',
  template: ``,
  styles: ['']
})
export class TariffListingFilteredComponent {
  @Input({ required: true }) tariffs: Tariff[] = [];
  @Input({ required: false }) sort!: Sort;
}
