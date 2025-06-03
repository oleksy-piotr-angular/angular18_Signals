import { Component } from '@angular/core';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';
import { ComputedSignal2Component } from './components/computed-signal2/computed-signal2.component';
import { ComputedSignal3Component } from './components/computed-signal3/computed-signal3.component';
import { ComputedSignal4Component } from './components/computed-signal4/computed-signal4.component';
import { ComputedSignal5Component } from './components/computed-signal5/computed-signal5.component';
import { ComputedSignal6Component } from './components/computed-signal6/computed-signal6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ComputedSignalComponent,
    ComputedSignal2Component,
    ComputedSignal3Component,
    ComputedSignal4Component,
    ComputedSignal5Component,
    ComputedSignal6Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialWithSignalsConcept';
}
