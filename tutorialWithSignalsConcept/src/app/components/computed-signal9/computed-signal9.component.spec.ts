import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal9Component } from './computed-signal9.component';

describe('ComputedSignal9Component', () => {
  let component: ComputedSignal9Component;
  let fixture: ComponentFixture<ComputedSignal9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
