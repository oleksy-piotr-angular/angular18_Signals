import { Component } from '@angular/core';
import { ComputedSignal15Component } from './components/computed-signal15/computed-signal15.component';
import { WidgetComponent } from './components/widget/widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComputedSignal15Component, WidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
