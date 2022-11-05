import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css']
})
export class WatchListItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: any;
  @Input() last: any;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  moveUp() {
    this.up.emit()
  }

  moveDown() {
    this.down.emit()
  }

}
