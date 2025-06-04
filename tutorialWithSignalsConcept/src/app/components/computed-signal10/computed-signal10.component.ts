import { AsyncPipe } from '@angular/common';
import {
  Component,
  inject,
  Injectable,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
class QueryService {
  query: WritableSignal<string> = signal('');
}

@Component({
  selector: 'app-computed-signal10',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './computed-signal10.component.html',
  styleUrl: './computed-signal10.component.scss',
})
export class ComputedSignal10Component implements OnInit {
  // Using a service to manage the query state
  query = inject(QueryService).query;

  // Convert the signal to an observable
  query$: Observable<string> = toObservable(this.query);

  // Using switchMap to react to changes in the query signal
  results$: Observable<string[]> = this.query$.pipe(
    switchMap((query) => of(query.split(' ')))
  );

  ngOnInit(): void {
    //only the final value 'c' will be emitted once the signal is stabilized
    this.query.set('a');
    this.query.set('b');
    this.query.set('c');
    //the timing is important here, the results$ observable will emit only
    // once the query signal is stabilized
  }

  onQueryChange(event: Event) {
    const input = <HTMLInputElement>event.target;
    const value = input.value;
    this.query.set(value);
  }
  // Using trackBy function to optimize ngFor performance
  trackByFn(index: number, item: string): any {
    // Combine value and index to ensure uniqueness
    return `${item}-${index}`;
  }
}
