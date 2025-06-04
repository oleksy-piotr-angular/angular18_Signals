import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal11Component } from './computed-signal11.component';

describe('ComputedSignal11Component', () => {
  let component: ComputedSignal11Component;
  let fixture: ComponentFixture<ComputedSignal11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
