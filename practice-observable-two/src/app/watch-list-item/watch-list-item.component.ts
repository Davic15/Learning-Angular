import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css']
})
export class WatchListItemComponent {
  @Input() item: any;
  @Input() first: any;
  @Input() last: any;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  moveUp() {
    this.up.emit();
  }

  moveDown() {
    this.down.emit();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
