import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplistingComponent } from './toplisting.component';

describe('ToplistingComponent', () => {
  let component: ToplistingComponent;
  let fixture: ComponentFixture<ToplistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToplistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
