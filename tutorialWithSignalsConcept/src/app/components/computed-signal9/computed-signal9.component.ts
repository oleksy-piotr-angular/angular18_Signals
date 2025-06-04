import {
  Component,
  effect,
  EffectRef,
  OnDestroy,
  signal,
  WritableSignal,
} from '@angular/core';
import { interval, Observable, Subscription, throwError } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-computed-signal9',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './computed-signal9.component.html',
  styleUrl: './computed-signal9.component.scss',
})
export class ComputedSignal9Component /*  implements OnDestroy */ {
  // count: WritableSignal<number> = signal(0);
  // private loggingEffect!: EffectRef;
  // constructor() {
  //   this.loggingEffect = effect(
  //     () => {
  //       console.log('Effect Invoked because count changed:', this.count());
  //     },
  //     { manualCleanup: true }
  //   );
  // }
  // ngOnDestroy(): void {
  //   this.loggingEffect.destroy();
  // }

  counterObservable: Observable<number> = interval(1000);
  private subscription!: Subscription;
  errorMessage: string = '';
  // Simulating an error in the observable
  observable = throwError(
    () => new Error('An error occurred in the observable')
  );
  value = toSignal(this.observable);

  counter = toSignal(this.counterObservable, {
    initialValue: 0,
    manualCleanup: true, // Prevents automatic cleanup of the signal when the component is destroyed
  });

  ngOnInit(): void {
    // Subscribe to the observable to keep it alive and prevent it from being garbage collected
    this.subscription = this.counterObservable.subscribe();

    // Handle errors in the observable
    try {
      this.value();
    } catch (error) {
      this.errorMessage = (error as Error).message;
    }
  }
  // ngOnDestroy(): void {
  //   // Unsubscribe from the observable to prevent memory leaks
  //   this.subscription.unsubscribe();
  // }
}
