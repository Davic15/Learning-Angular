import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-rental',
  templateUrl: './movie-rental.component.html',
  styleUrls: ['./movie-rental.component.css']
})
export class MovieRentalComponent implements OnInit {
  @Input() rentalList: any;
  @Output() clearRentalList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClearClick() {
    this.clearRentalList.emit()
  }

}
