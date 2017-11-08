import { Component, OnInit } from '@angular/core';
import {SubjectService1} from '../Services/subjectService';

@Component({
  selector: 'app-observer-tes3',
  templateUrl: './observer-tes3.component.html',
  styleUrls: ['./observer-tes3.component.css'],
  providers: [SubjectService1]
})
export class ObserverTes3Component implements OnInit {
  constructor(private subjectService: SubjectService1) { }

  ngOnInit() {
    this.subjectService.numberEmit.subscribe((count: number) => {console.log(count); });
  }

}
