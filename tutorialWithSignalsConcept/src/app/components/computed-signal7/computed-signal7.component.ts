import {
  Component,
  effect,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal7',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal7.component.html',
  styleUrl: './computed-signal7.component.scss',
})
export class ComputedSignal7Component {
  count: WritableSignal<number> = signal(0);
  name: WritableSignal<string> = signal('Peter');
  count1: WritableSignal<number> = signal(10);
  name1: WritableSignal<string> = signal('Peter1');

  constructor() {
    effect(() => {
      console.log(
        `Count: ${this.count()} Name: ${untracked(() => this.name())}`
      );
    });

    //second possibility to untrack everything at once Using untracked with "callback"
    untracked(() => {
      console.log(`Count: ${this.count1()} Name: ${this.name1()}`);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('Setting count triggered');
      this.count.set(3);

      //this will not trigger the effect because "count1" is untracked at once with "name1"
      this.count1.set(6);
    }, 3000);

    setTimeout(() => {
      console.log('Setting name triggered');
      //this will not trigger the effect because "name" is untracked
      this.name.set('Mary');

      //this will not trigger the effect because "name1" is untracked at once with "count1"
      this.name1.set('Mary1');
    }, 6000);
  }
}
