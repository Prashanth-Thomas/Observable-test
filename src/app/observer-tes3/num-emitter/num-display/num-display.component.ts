import { Component, OnInit } from '@angular/core';
import {SubjectService1} from '../../../Services/subjectService';

@Component({
  selector: 'app-num-display',
  templateUrl: './num-display.component.html',
  styleUrls: ['./num-display.component.css']
})
export class NumDisplayComponent implements OnInit {
  num= 0;
  constructor(private subjectService: SubjectService1) { }

  ngOnInit() {
    this.subjectService.numberEmit.subscribe((count: number) => {this.num = count; });
  }


}
