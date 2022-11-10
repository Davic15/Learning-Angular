import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie = {} as Movie;
  @Output() changeOnSale = new EventEmitter();
  @Output() delete = new EventEmitter();
  selected = false;

  ngOnInit() {
  }

  getClasses() {
    if(this.selected) {
      return "btn btn-success btn-sm text-dark"
    } else if(this.movie.onSale) {
      return "btn btn-success btn-sm text-danger";
    } else {
      return "btn btn-success btn-sm"
    }
  }

  onClick() {
    this.selected = true;
  }

  onSaleButtonClicked() {
    this.changeOnSale.emit();
  }

  onDelete() {
    this.delete.emit()
  }
}
