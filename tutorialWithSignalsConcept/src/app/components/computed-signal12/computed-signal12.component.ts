import {
  Component,
  computed,
  effect,
  input,
  InputSignal,
  Signal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal12',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal12.component.html',
  styleUrl: './computed-signal12.component.scss',
})
export class ComputedSignal12Component {
  //InputSignal represents a special Signal for a directive/component input.
  firstName: InputSignal<string | undefined> = input<string>();

  // InputSignal is a type of Signal that is used for inputs in Angular components.
  age: InputSignal<number> = input<number>(0, { alias: 'studentAge' });

  // InputSignal can also be used for optional inputs, which can be undefined.
  lastName: InputSignal<string | undefined> = input<string>();

  // ComputedSignal is a type of Signal that is derived from other Signals.
  ageMultiplied: Signal<number> = computed(() => this.age() * 2);

  constructor() {
    // The effect function is used to run side effects when the value of a Signal changes.
    // Of course it has to be run in DI context, so it can be used in the constructor of a component or directive.
    effect(() => {
      console.log(this.firstName());
    });
  }
}
