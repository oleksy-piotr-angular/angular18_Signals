import { Component } from '@angular/core';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComputedSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorialWithSignalsConcept';
}
