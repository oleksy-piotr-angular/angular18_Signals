import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal8Component } from './computed-signal8.component';

describe('ComputedSignal8Component', () => {
  let component: ComputedSignal8Component;
  let fixture: ComponentFixture<ComputedSignal8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
