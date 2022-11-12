import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  currentCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  setNewTimer(event: number) {
    this.currentCounter = event
  }

}
