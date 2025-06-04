import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { ComputedSignalComponent } from './components/computed-signal/computed-signal.component';
import { ComputedSignal2Component } from './components/computed-signal2/computed-signal2.component';
import { ComputedSignal3Component } from './components/computed-signal3/computed-signal3.component';
import { ComputedSignal4Component } from './components/computed-signal4/computed-signal4.component';
import { ComputedSignal5Component } from './components/computed-signal5/computed-signal5.component';
import { ComputedSignal6Component } from './components/computed-signal6/computed-signal6.component';
import { ComputedSignal7Component } from './components/computed-signal7/computed-signal7.component';
import { ComputedSignal8Component } from './components/computed-signal8/computed-signal8.component';
import { ComputedSignal9Component } from './components/computed-signal9/computed-signal9.component';
import { ComputedSignal10Component } from './components/computed-signal10/computed-signal10.component';
import { ComputedSignal11Component } from './components/computed-signal11/computed-signal11.component';
import { Observable } from 'rxjs';
import { outputToObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // ComputedSignalComponent,
    // ComputedSignal2Component,
    // ComputedSignal3Component,
    // ComputedSignal4Component,
    // ComputedSignal5Component,
    // ComputedSignal6Component,
    // ComputedSignal7Component,
    // ComputedSignal8Component,
    // ComputedSignal9Component,
    // ComputedSignal10Component,
    ComputedSignal11Component,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'tutorialWithSignalsConcept';

  nameChange$!: Observable<string>;

  //another handful example of catching
  @ViewChild('computedSignal11')
  computedSignal11: ComputedSignal11Component | null = null;

  ngAfterViewInit(): void {
    //Converts an Angular output declared via output() or outputFromObservable() to an observable.
    this.nameChange$ = outputToObservable(this.computedSignal11!.nameChange);
  }
}
