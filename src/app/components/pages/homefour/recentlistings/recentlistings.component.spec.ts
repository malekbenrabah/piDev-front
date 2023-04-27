import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlistingsComponent } from './recentlistings.component';

describe('RecentlistingsComponent', () => {
  let component: RecentlistingsComponent;
  let fixture: ComponentFixture<RecentlistingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlistingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
