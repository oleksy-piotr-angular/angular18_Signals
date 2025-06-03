import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal7Component } from './computed-signal7.component';

describe('ComputedSignal7Component', () => {
  let component: ComputedSignal7Component;
  let fixture: ComponentFixture<ComputedSignal7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
