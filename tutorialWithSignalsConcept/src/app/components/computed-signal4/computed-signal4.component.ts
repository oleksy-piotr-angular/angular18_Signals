import {
  Component,
  effect,
  Injector,
  OnDestroy,
  runInInjectionContext,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal4',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal4.component.html',
  styleUrl: './computed-signal4.component.scss',
})
export class ComputedSignal4Component implements OnDestroy {
  count: WritableSignal<number> = signal(0);

  //when we assign/register an effect to the property we can use this property as this effect
  //when you use this you don't need to have put this property in "constructor()" it will called
  //and it will be executed when the signal changes
  loggingEffect = effect(() => {
    console.log('ComputedSignal4 Count changed in "effect()":', this.count());
  });

  // You can use the "injector" to inject to use "runInjectionContext" in method
  constructor(private injector: Injector) {
    //Effect can be only used in the constructor because it needs Injection contexts
  }

  //this is just an example to show that you can initialize the effect in the method
  //and it will be executed whenever the signal changes
  initializeLogin() {
    this.count.set(this.count() + 1);
    //you initialize this effect whenever you called this method with this technic
    //!First technic
    /* runInInjectionContext(this.injector, () => {
      effect(() => {
        console.log(
          `'"effect()" called with this method will execute whenever "count" changes: ${this.count()}`
        );
      });
    }); */

    //!Second technic
    effect(
      () => {
        console.log(
          `'"effect()" called with this method will execute whenever "count" changes: ${this.count()}`
        );
      },
      { injector: this.injector } // You can pass the injector here to use it in the effect
    );
  }

  //this effect will be automatically destroyed whenever the component is destroyed
  //it will happen if "manualCleanup: true" is not set
  private loggingEffect2 = effect(
    () => {
      console.log('ComputedSignal4 Count changed in "effect()":', this.count());
    },
    { manualCleanup: true } // This will allow you to manually clean up the effect if needed
  );
  //  it would be not destroyed automatically when the component is destroyed

  ngOnDestroy(): void {
    this.loggingEffect2.destroy(); // Manually clean up the effect to avoid memory leaks
    // when the component is destroyed and if you set "manualCleanup: true"
  }
}
