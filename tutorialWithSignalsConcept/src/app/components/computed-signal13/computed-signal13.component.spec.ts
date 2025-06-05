import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal13Component } from './computed-signal13.component';

describe('ComputedSignal13Component', () => {
  let component: ComputedSignal13Component;
  let fixture: ComponentFixture<ComputedSignal13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
