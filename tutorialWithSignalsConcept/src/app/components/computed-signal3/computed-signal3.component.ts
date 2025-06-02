import {
  Component,
  effect,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal3',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal3.component.html',
  styleUrl: './computed-signal3.component.scss',
})
export class ComputedSignal3Component implements OnInit {
  count: WritableSignal<number> = signal(0);
  userAction: WritableSignal<string> = signal('Clicked');
  a: WritableSignal<number> = signal(0);
  b: WritableSignal<number> = signal(0);

  constructor() {
    effect(() => {
      console.log(
        'We see this because "effect()" was defined in ComputedSignal3 "constructor()" and Count was changed in :',
        this.count()
      );
    });

    effect(
      () => {
        // This effect will run whenever `a` or `b` changes | this is WRONG PRACTICE and could make some errors
        this.a.set(this.b() + 1);
        //But if we really need it we just set this "allowSignalWrites" flag on true below:
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    // This effect will run once when the component initializes | No need a side effect
    this.userAction.set('Initialized');
  }

  increment() {
    this.count.update((value) => value + 1);
  }
}
