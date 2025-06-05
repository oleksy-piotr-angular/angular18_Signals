import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal14Component } from './computed-signal14.component';

describe('ComputedSignal14Component', () => {
  let component: ComputedSignal14Component;
  let fixture: ComponentFixture<ComputedSignal14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
