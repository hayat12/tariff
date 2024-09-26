import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Sort } from "src/app/interfaces/sort";
import { Tariff } from "src/app/interfaces/tariff.interface";

@Component({
  selector: "app-tariff-listing-filtered",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let tariff of tariffs">
      <app-tariff-card [tariff]="tariff" [sort]="sort" />
    </ng-container>
  `,
  styles: [""],
})
export class TariffListingFilteredComponent implements OnChanges {
  @Input({ required: true }) tariffs?: Tariff[] | null;
  @Input({ required: false }) sort!: Sort;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!!this.sort || this.tariffs == null) {
      return;
    }
    this.tariffs = this.tariffs.sort(
      (a: any, b: any) => b[this.sort.key] - a[this.sort.key]
    );
  }
}
