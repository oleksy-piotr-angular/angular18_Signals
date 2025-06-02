import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal4Component } from './computed-signal4.component';

describe('ComputedSignal4Component', () => {
  let component: ComputedSignal4Component;
  let fixture: ComponentFixture<ComputedSignal4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
