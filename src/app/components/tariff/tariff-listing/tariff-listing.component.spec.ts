import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffListingComponent } from './tariff-listing.component';

describe('TariffListingComponent', () => {
  let component: TariffListingComponent;
  let fixture: ComponentFixture<TariffListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TariffListingComponent]
    });
    fixture = TestBed.createComponent(TariffListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
