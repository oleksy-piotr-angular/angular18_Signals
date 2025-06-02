import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal3Component } from './computed-signal3.component';

describe('ComputedSignal3Component', () => {
  let component: ComputedSignal3Component;
  let fixture: ComponentFixture<ComputedSignal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
