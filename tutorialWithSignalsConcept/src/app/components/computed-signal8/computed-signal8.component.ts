import {
  Component,
  effect,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal8',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal8.component.html',
  styleUrl: './computed-signal8.component.scss',
})
export class ComputedSignal8Component implements OnInit {
  count: WritableSignal<number> = signal(0);

  constructor() {
    //effect with cleanup function which is registered using "onCleanup"
    effect((onCleanup) => {
      const intervalId = setInterval(() => {
        console.log(`Interval effect executes: Count is ${this.count()}`);
      }, 1000);

      //create a resize anonymous function and assign it to variable to handle window resize
      const handleResize = () => {
        console.log(
          'Window resized x:',
          window.innerWidth,
          'y:',
          window.innerHeight
        );
      };

      window.addEventListener('resize', handleResize); // Add event listener for window resize in this effect

      // Cleanup function to clear the interval when the effect is disposed after the component is destroyed
      onCleanup(() => {
        console.log('Cleaning up interval effect');
        clearInterval(intervalId);
        window.removeEventListener('resize', handleResize); // Remove event listener for window resize
      });

      //? this feature is useful when we want to prevent stale operations from continuing
      //? (e. g. , active timeouts, intervals, or event listeners) when the effect reruns or destroyed
      //!It is preventing memory leaks and ensuring that the effect is always in a clean state
    });
  }

  ngOnInit(): void {}
}
