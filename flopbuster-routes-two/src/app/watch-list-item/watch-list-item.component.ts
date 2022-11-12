import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css']
})
export class WatchListItemComponent {
  @Input() item: any;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

}
