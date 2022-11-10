import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  @Input() rentalList: any;
  @Output() delete = new EventEmitter();

  onDelete(flopId: any) {
    this.delete.emit(flopId);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
