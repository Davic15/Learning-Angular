import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent {
  @Input() rentalList: any;
  @Output() clearRentalList = new EventEmitter();

  onClearClick() {
    this.clearRentalList.emit()
  }
}
