import {
  Component,
  computed,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.scss',
})
export class ComputedSignalComponent implements OnInit {
  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  items: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  evenItems: Signal<number[]> = computed(() => {
    console.log('Filtering even numbers...');
    return this.items().filter((item) => item % 2 === 0);
  });

  expensiveComputation: Signal<number> = computed(() => {
    console.log('Running expensive computation...');
    // Simulate an expensive computation
    return this.count() * 100;
  });

  ngOnInit(): void {
    // Example of using the computed signal
    console.log('Initial count:', this.count());
    console.log('Double count:', this.doubleCount());

    // Update the count
    this.count.set(5);
    console.log('Updated count:', this.count());
    console.log('Updated double count:', this.doubleCount());
  }

  runExpensiveCount(): void {
    console.log(
      `Expensive computation is lazy, efficient execution na it brings 
      \n results from last computed value which is memoized in app:`,
      this.expensiveComputation()
    );
    console.log('And run evenItems() filter to see how it works with signals:');
    console.log('Filtering even numbers:', this.evenItems());
  }

  increment(): void {
    this.count.update((value) => value + 1);
    console.log('Incremented count:', this.count());
    console.log(
      'Now double count will be recalculated and assigned as a last value'
    );
    this.items.set([10, 15, 20, 25, 30, 35, 40, 45, 50]);
    console.log('Items Array was changed:', this.count());
    console.log(
      'Now filter computed in evenItems will be recalculated and assigned as a last filtered value of Even Items Array'
    );
  }
}
