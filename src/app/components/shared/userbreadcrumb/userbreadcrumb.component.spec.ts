import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbreadcrumbComponent } from './userbreadcrumb.component';

describe('UserbreadcrumbComponent', () => {
  let component: UserbreadcrumbComponent;
  let fixture: ComponentFixture<UserbreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
