import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlistingComponent } from './recentlisting.component';

describe('RecentlistingComponent', () => {
  let component: RecentlistingComponent;
  let fixture: ComponentFixture<RecentlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
