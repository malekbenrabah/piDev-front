import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluectaComponent } from './bluecta.component';

describe('BluectaComponent', () => {
  let component: BluectaComponent;
  let fixture: ComponentFixture<BluectaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluectaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
