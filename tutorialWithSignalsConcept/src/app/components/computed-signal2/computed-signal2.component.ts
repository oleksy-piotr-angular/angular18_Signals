import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal2',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal2.component.html',
  styleUrl: './computed-signal2.component.scss',
})
export class ComputedSignal2Component {
  showCount: WritableSignal<boolean> = signal(false);
  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);
  conditionalCount = computed(() => {
    console.log('Executing the computed');
    if (!this.showCount()) {
      return 'nothing to show here';
    } else {
      return 'th count value is ${this.count()}';
    }
  });

  getConditionalCountValue(): string {
    return this.conditionalCount();
  }
  increment() {
    this.count.update((value) => value + 1);
  }

  updateShowCount() {
    this.showCount.update((value) => !value);
  }
}
