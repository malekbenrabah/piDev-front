import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilelistingComponent } from './profilelisting.component';

describe('ProfilelistingComponent', () => {
  let component: ProfilelistingComponent;
  let fixture: ComponentFixture<ProfilelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilelistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
