import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  stopped = false;
  counter = 0;
  intervalId: any;

  constructor() {}


  ngOnInit(): void {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId);
    this.stopped = true;
  }

}
