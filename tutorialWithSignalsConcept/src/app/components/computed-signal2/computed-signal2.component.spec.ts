import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal2Component } from './computed-signal2.component';

describe('ComputedSignal2Component', () => {
  let component: ComputedSignal2Component;
  let fixture: ComponentFixture<ComputedSignal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
