import {
  Component,
  computed,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-computed-signal6',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal6.component.html',
  styleUrl: './computed-signal6.component.scss',
})
export class ComputedSignal6Component implements OnInit {
  baseSignal: WritableSignal<string[]> = signal(['a', 'b', 'c']);

  computedSignal = computed(
    () => {
      // Computed signal that depends on baseSignal and data
      console.log('99 Computed signal executes with deep Equality...');
      return this.baseSignal().push('d');
    },
    { equal: isEqual }
  ); // Using lodash's isEqual for deep comparison

  constructor() {
    // Effect to log changes in computedSignal
    computed(() => {
      console.log(
        'CONSTRUCTOR Effect caused by changing data in "computedSignal". Data changed to:'
      );
      return this.baseSignal();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      //setTimeout to simulate data change after 2 seconds
      console.log('setTimeout() executed with Deep Equality...');

      this.baseSignal.set(['a', 'b', 'c', 'd']); // This will not trigger the effect because we used deep equality with Lodash the data is the same
    }, 2000);
  }
}
