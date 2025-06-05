import {
  Component,
  contentChild,
  effect,
  ElementRef,
  Signal,
} from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-computed-signal15',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal15.component.html',
  styleUrl: './computed-signal15.component.scss',
})
export class ComputedSignal15Component {
  //! Using contentChild to get a reference to the "#h1"element using "h1" string below
  //! This will allow us to access the header element in the effect
  //! Note: contentChild is used to get a reference to the element in the content projection
  //! This is useful when you want to access an element that is projected into the component directly
  header1El: Signal<ElementRef<HTMLHeadingElement> | undefined> =
    contentChild<ElementRef<HTMLHeadingElement>>('h1');
  header2El: Signal<ElementRef<HTMLHeadingElement> | undefined> = contentChild<
    ElementRef<HTMLHeadingElement>
  >('h2', { descendants: true });

  //! Using contentChild to get a reference to the WidgetComponent
  widget: Signal<WidgetComponent | undefined> = contentChild(WidgetComponent);
  widget2: Signal<WidgetComponent | undefined> = contentChild(WidgetComponent, {
    read: ElementRef,
  });

  constructor() {
    // effect need a injector context to run properly so we use the constructor
    effect(() => {
      const header1 = this.header1El();
      const header2 = this.header2El();
      const widget = this.widget();
      const widget2 = this.widget2();

      if (header1) {
        console.log('Header1 ElementRef:', header1);
      } else {
        console.log('Header1 element not found');
      }

      if (header2) {
        console.log('Header2 ElementRef:', header2);
      } else {
        console.log('Header2 element not found');
      }

      if (widget) {
        console.log('Widget Component:', widget);
      } else {
        console.log('Widget element not found');
      }

      if (widget2) {
        console.log('Widget2 ElementRef:', widget2);
      } else {
        console.log('Widget2 element not found');
      }
    });
  }
}
