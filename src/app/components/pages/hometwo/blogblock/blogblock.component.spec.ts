import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogblockComponent } from './blogblock.component';

describe('BlogblockComponent', () => {
  let component: BlogblockComponent;
  let fixture: ComponentFixture<BlogblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
