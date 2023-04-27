import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyarchiveComponent } from './agencyarchive.component';

describe('AgencyarchiveComponent', () => {
  let component: AgencyarchiveComponent;
  let fixture: ComponentFixture<AgencyarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
