import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleagentComponent } from './singleagent.component';

describe('SingleagentComponent', () => {
  let component: SingleagentComponent;
  let fixture: ComponentFixture<SingleagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
