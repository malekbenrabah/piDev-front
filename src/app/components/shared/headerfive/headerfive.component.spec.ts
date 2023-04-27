import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfiveComponent } from './headerfive.component';

describe('HeaderfiveComponent', () => {
  let component: HeaderfiveComponent;
  let fixture: ComponentFixture<HeaderfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
