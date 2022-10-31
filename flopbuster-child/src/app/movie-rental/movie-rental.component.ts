import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-rental',
  templateUrl: './movie-rental.component.html',
  styleUrls: ['./movie-rental.component.css']
})
export class MovieRentalComponent implements OnInit {
  @Input() rentalList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
