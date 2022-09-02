import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'creat-operators',
  templateUrl: './creat-operators.component.html',
  styles: [],
})
export class CreatOperatorsComponent implements OnInit {
  observableButton: Observable<Event> = fromEvent(document, 'click');

  ngOnInit(): void {
    this.subscribeToObservable();
  }
  private subscribeToObservable() {
    this.observableButton.subscribe(() => {
      console.log(`of times the user clicked on the screen`);
    });
  }
}
