import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparelistingComponent } from './comparelisting.component';

describe('ComparelistingComponent', () => {
  let component: ComparelistingComponent;
  let fixture: ComponentFixture<ComparelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparelistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
