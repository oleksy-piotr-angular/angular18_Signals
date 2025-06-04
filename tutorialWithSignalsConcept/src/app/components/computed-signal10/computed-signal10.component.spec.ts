import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal10Component } from './computed-signal10.component';

describe('ComputedSignal10Component', () => {
  let component: ComputedSignal10Component;
  let fixture: ComponentFixture<ComputedSignal10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
