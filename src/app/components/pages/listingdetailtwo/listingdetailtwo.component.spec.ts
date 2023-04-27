import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingdetailtwoComponent } from './listingdetailtwo.component';

describe('ListingdetailtwoComponent', () => {
  let component: ListingdetailtwoComponent;
  let fixture: ComponentFixture<ListingdetailtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingdetailtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingdetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
