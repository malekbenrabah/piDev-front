import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingmapComponent } from './listingmap.component';

describe('ListingmapComponent', () => {
  let component: ListingmapComponent;
  let fixture: ComponentFixture<ListingmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
