import {
  Component,
  computed,
  effect,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'app-computed-signal5',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal5.component.html',
  styleUrl: './computed-signal5.component.scss',
})
export class ComputedSignal5Component implements OnInit {
  data: WritableSignal<string[]> = signal(['test'], { equal: isEqual }); // Using lodash's isEqual for deep comparison
  dataObj: WritableSignal<{ key: string }> = signal(
    { key: 'test' },
    { equal: isEqual }
  ); // Using lodash's isEqual for deep comparison

  constructor() {
    // Effect to log changes in data
    effect(() => {
      console.log(
        'Effect caused by changing data in "data". Data changed to:',
        this.data()
      );
    });
    // Effect to log changes in dataObj
    effect(() => {
      console.log(
        'Effect caused by changing data in "dataObj". Data changed to:',
        this.dataObj()
      );
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      //setTimeout to simulate data change after 2 seconds
      console.log('setTimeout() executed...');

      this.data.set(['test']); // This will not trigger the effect because we used deep equality with Lodash the data is the same

      this.dataObj.set({ key: 'test' }); // This will not trigger the effect because we used deep equality with Lodash the data is the same
    }, 2000);
  }
}
