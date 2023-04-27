import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentarchiveComponent } from './agentarchive.component';

describe('AgentarchiveComponent', () => {
  let component: AgentarchiveComponent;
  let fixture: ComponentFixture<AgentarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
