import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal15Component } from './computed-signal15.component';

describe('ComputedSignal15Component', () => {
  let component: ComputedSignal15Component;
  let fixture: ComponentFixture<ComputedSignal15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
