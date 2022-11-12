import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  counter: number = 0;
  @Output() myCounter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {this.counter++}, 1000)
  }

  buttonClicked() {
    this.myCounter.emit(this.counter)
  }

}
