import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie: any;
  buttonColor = 'red'
  tileBorder = '';

  constructor() { }

  ngOnInit(): void {
    if(this.movie.stars < 4) {
      this.tileBorder = '3px solid red';
    } else {
      this.tileBorder = '3px solid green';
    }
  }
}
