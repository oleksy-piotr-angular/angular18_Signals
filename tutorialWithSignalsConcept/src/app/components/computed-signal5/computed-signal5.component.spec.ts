import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal5Component } from './computed-signal5.component';

describe('ComputedSignal5Component', () => {
  let component: ComputedSignal5Component;
  let fixture: ComponentFixture<ComputedSignal5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
