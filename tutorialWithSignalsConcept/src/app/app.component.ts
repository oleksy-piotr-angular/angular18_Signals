import { Component } from '@angular/core';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';
import { ComputedSignal2Component } from './components/computed-signal2/computed-signal2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComputedSignalComponent, ComputedSignal2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialWithSignalsConcept';
}
