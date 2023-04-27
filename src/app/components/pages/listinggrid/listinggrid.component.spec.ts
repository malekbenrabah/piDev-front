import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinggridComponent } from './listinggrid.component';

describe('ListinggridComponent', () => {
  let component: ListinggridComponent;
  let fixture: ComponentFixture<ListinggridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinggridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinggridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
