import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsidebarComponent } from './listingsidebar.component';

describe('ListingsidebarComponent', () => {
  let component: ListingsidebarComponent;
  let fixture: ComponentFixture<ListingsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
