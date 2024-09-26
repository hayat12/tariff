import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectList } from 'src/app/interfaces/select-list.interface';
import { Sort } from 'src/app/interfaces/sort';
import { Tariff } from 'src/app/interfaces/tariff.interface';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-tariff-listing',
  templateUrl: './tariff-listing.component.html',
  styleUrls: ['./tariff-listing.component.sass']
})
export class TariffListingComponent{

  constructor(private tariffService: TariffService) {}
  sort: Sort = {
    sortDirection: 'ASC',
    key: 'price',
  };
  tariffs$: Observable<Tariff[]> = this.tariffService.getTariff();

  filterOptions: SelectList[] = [
    { text: 'Price', value: 'price' },
    { text: 'Download', value: 'download' },
    { text: 'Upload', value: 'upload' },
  ];

  onSort(sort: Sort) {
    this.sort = sort;
  }

}
