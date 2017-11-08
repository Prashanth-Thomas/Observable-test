import { Component, OnInit } from '@angular/core';
import {SubjectService1} from '../../Services/subjectService';

@Component({
  selector: 'app-num-emitter',
  templateUrl: './num-emitter.component.html',
  styleUrls: ['./num-emitter.component.css']
})
export class NumEmitterComponent implements OnInit {
  count= 0;

  constructor(private subjectService: SubjectService1) { }

  ngOnInit() {
  }

  incrementFunc() {
    this.count++;
    this.subjectService.numberEmit.next(this.count);
  }

}
