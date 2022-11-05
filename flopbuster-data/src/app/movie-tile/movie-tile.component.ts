import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie: any;
  //buttonColor = 'red'
  tileBorder = '';
  onSale = true;
  selected = false;

  constructor() { }

  ngOnInit(): void {
    /*if(this.movie.stars < 4) {
      this.tileBorder = '3px solid red';
    } else {
      this.tileBorder = '3px solid green';
    }*/
  }

  getNewFrame() {
    if (this.movie.start < 4) {
      return 'border-frame'
    }
    return ''
  }

  onClick(){
    this.selected = true;
  }

  getButtonTextColorClass() {
    if(this.selected) {
      return 'text-dark';
    } else if (this.onSale) {
      return 'text-danger';
    } else {
      return ''
    }
  }
}
