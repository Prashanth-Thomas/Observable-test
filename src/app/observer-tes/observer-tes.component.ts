import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-observer-tes',
  templateUrl: './observer-tes.component.html',
  styleUrls: ['./observer-tes.component.css']
})
export class ObserverTesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    myNumbers.subscribe((num: number) => {console.log('First' + num); });
    setTimeout(
      () => {myNumbers.subscribe((num: number) => {console.log('second' + num); }); },
      9000
    );
  }

}
