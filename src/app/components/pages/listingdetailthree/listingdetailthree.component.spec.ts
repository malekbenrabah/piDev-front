import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingdetailthreeComponent } from './listingdetailthree.component';

describe('ListingdetailthreeComponent', () => {
  let component: ListingdetailthreeComponent;
  let fixture: ComponentFixture<ListingdetailthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingdetailthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingdetailthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
