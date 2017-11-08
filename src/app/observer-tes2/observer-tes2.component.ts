import { Component, OnInit } from '@angular/core';
import {ObserverService} from '../Services/observerService';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-observer-tes2',
  templateUrl: './observer-tes2.component.html',
  styleUrls: ['./observer-tes2.component.css'],
  providers: [ObserverService]
})
export class ObserverTes2Component implements OnInit {

  constructor(private os: ObserverService) { }

  ngOnInit() {
    const observable = Observable.create((observer: Observer<number>) => {
      setInterval(
        () => {observer.next(this.os.getData()); },
        1000
      );
    });

    const xyz = observable.publish();
    const observerA = {
      next: x => console.log('ObserverA got a next value: ' + x),
      error: err => console.error('ObserverA got an error: ' + err),
      complete: () => console.log('ObserverA got a complete notification'),
    };

    const observerB = {
      next: x => console.log('ObserverB got a next value: ' + x),
      error: err => console.error('ObserverB got an error: ' + err),
      complete: () => console.log('ObserverB got a complete notification'),
    };
    xyz.subscribe(observerA);
    xyz.connect();
    setTimeout(
      () => { xyz.subscribe(observerB); },
      5000
    );
  }
}
