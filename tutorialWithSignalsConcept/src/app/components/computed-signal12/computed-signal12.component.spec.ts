import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedSignal12Component } from './computed-signal12.component';

describe('ComputedSignal12Component', () => {
  let component: ComputedSignal12Component;
  let fixture: ComponentFixture<ComputedSignal12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedSignal12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputedSignal12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
