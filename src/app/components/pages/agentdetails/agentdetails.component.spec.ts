import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentdetailsComponent } from './agentdetails.component';

describe('AgentdetailsComponent', () => {
  let component: AgentdetailsComponent;
  let fixture: ComponentFixture<AgentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
