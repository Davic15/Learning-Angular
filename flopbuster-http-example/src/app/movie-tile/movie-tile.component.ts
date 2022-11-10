import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie = {} as Movie;
  @Output() rent = new EventEmitter();
  selected = false;

  onRentClicked() {
    this.rent.emit();
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.movie)
  }

}
