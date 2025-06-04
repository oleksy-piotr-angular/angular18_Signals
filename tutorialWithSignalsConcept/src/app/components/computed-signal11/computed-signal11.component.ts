import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-computed-signal11',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal11.component.html',
  styleUrl: './computed-signal11.component.scss',
})
export class ComputedSignal11Component {
  nameChange$ = new Observable<string>((observer) => {
    let counter = 0;
    setInterval(() => {
      observer.next(`Name ${counter++}`);
    }, 1000);
  });

  //Initialize an output in your directive by declaring a class field and initializing it with
  //the outputFromObservable() function.
  nameChange = outputFromObservable(this.nameChange$); // This will create an @Output() event emitter
}
