import {
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal14',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal14.component.html',
  styleUrl: './computed-signal14.component.scss',
})
export class ComputedSignal14Component {
  checked: ModelSignal<boolean> = model<boolean>(false);
  disabled: InputSignal<boolean> = input<boolean>(false);

  toggle() {
    this.checked.update((value) => !value);
  }
}
