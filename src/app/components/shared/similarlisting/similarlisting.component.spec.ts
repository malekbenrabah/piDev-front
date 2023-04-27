import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarlistingComponent } from './similarlisting.component';

describe('SimilarlistingComponent', () => {
  let component: SimilarlistingComponent;
  let fixture: ComponentFixture<SimilarlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarlistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
