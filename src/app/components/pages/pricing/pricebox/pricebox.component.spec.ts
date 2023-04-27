import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceboxComponent } from './pricebox.component';

describe('PriceboxComponent', () => {
  let component: PriceboxComponent;
  let fixture: ComponentFixture<PriceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
