import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-computed-signal15',
  standalone: true,
  imports: [NgIf],
  templateUrl: './computed-signal15.component.html',
  styleUrl: './computed-signal15.component.scss',
})
export class ComputedSignal15Component implements AfterViewInit {
  requiredEl = viewChild.required('requiredEl');
  optionalEl = viewChild('optionalEl');
  showEl = signal(false);

  ngAfterViewInit(): void {
    console.log('requiredEl: ', this.requiredEl());
    console.log('optionalEl', this.optionalEl());
  }

  toggleEl() {
    this.showEl.update((value) => !value);
  }
}
