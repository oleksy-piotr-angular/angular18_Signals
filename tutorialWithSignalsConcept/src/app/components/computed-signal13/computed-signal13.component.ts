import { Component, input, InputSignalWithTransform } from '@angular/core';

@Component({
  selector: 'app-computed-signal13',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal13.component.html',
  styleUrl: './computed-signal13.component.scss',
})
export class ComputedSignal13Component {
  disabled: InputSignalWithTransform<boolean, string | boolean> = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value;
    },
  });
}
