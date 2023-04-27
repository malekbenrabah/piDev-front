import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockctaComponent } from './blockcta.component';

describe('BlockctaComponent', () => {
  let component: BlockctaComponent;
  let fixture: ComponentFixture<BlockctaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockctaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockctaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
