import { Component } from '@angular/core';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';
import { ComputedSignal2Component } from './components/computed-signal2/computed-signal2.component';
import { ComputedSignal3Component } from './components/computed-signal3/computed-signal3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ComputedSignalComponent,
    ComputedSignal2Component,
    ComputedSignal3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialWithSignalsConcept';
}
