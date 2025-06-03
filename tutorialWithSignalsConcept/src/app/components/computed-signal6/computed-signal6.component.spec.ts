import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal6Component } from './computed-signal6.component';

describe('ComputedSignal6Component', () => {
  let component: ComputedSignal6Component;
  let fixture: ComponentFixture<ComputedSignal6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
