import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Tariff } from 'src/app/interfaces/tariff.interface';
import { mockData } from 'src/app/mock/data';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.sass']
})
export class TariffDetailsComponent {
  tariff$: Observable<Tariff | undefined> = this.tariffService.getTariffById(this.route.snapshot.params['id']);

  constructor(
    private tariffService: TariffService,
    private route: ActivatedRoute
  ) {}
}
