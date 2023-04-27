import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsliderComponent } from './listingslider.component';

describe('ListingsliderComponent', () => {
  let component: ListingsliderComponent;
  let fixture: ComponentFixture<ListingsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
