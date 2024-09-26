import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SortDirection } from "src/app/interfaces/sort-dir";
import { Sort } from "src/app/interfaces/sort";
import { SelectList } from "src/app/interfaces/select-list.inerface";

@Component({
  selector: "app-sort-tag",
  standalone: true,
  imports: [CommonModule],
  template: `<select
    (change)="sort($event)"
    name="sort"
    class="sort-tag"
    id="sort"
  >
    <option *ngFor="let option of items" [value]="option.value">
      {{ option.text }}
    </option>
  </select>`,
  styles: [
    `
    .sort-tag
      padding: 8px 16px
      width: auto
    `,
  ],
})
export class SortTagComponent {
  @Input({ required: true }) items: SelectList[] = [];
  @Input() sortDirection: SortDirection = "ASC";
  @Output() sortChange = new EventEmitter<Sort>();
  sort(event: any) {
    this.sortDirection = this.sortDirection === "ASC" ? "DESC" : "ASC";
    this.sortChange.emit({
      sortDirection: this.sortDirection,
      key: event.target.value,
    });
  }
}
