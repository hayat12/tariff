import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Sort } from 'src/app/interfaces/sort';
import { Tariff } from 'src/app/interfaces/tariff.interface';

@Component({
  selector: 'app-tariff-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tariff-card.component.html',
  styleUrls: ['./tariff-card.component.sass']
})
export class TariffCardComponent {
  @Input({required: true}) tariff!:Tariff
  @Input() sort!:Sort
  constructor(private router:Router, private route: ActivatedRoute){}

  toDetails(id:number){
    console.log(id);
    this.router.navigate(['./details', id], {relativeTo: this.route})
  }
}
