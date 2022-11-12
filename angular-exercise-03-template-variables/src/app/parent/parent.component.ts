import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  clickStop = false;

  constructor() { }

  ngOnInit(): void {
  }

  stopTimer() {
    this.clickStop = true;
  }
}
