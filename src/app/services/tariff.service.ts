import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Tariff } from '../interfaces/tariff.interface';
import { mockData } from '../mock/data';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  getTariff():Observable<Tariff[]>{
    return of(mockData);
  }
  getTariffById(id:number):Observable<Tariff | undefined >{
    const tariff:Tariff|undefined = mockData.find((f) => f.id == id) ?? undefined;
    return of(tariff);
  }
}
