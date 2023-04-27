import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitlistingComponent } from './submitlisting.component';

describe('SubmitlistingComponent', () => {
  let component: SubmitlistingComponent;
  let fixture: ComponentFixture<SubmitlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
