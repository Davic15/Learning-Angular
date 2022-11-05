import { Component } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-data-two';

  rentalList: string[] = [];
  flopData;

  constructor(private titleService: Title) {
    this.flopData = FLOP_DATA
    titleService.setTitle('Flopbox')
  }

  onRentMovie(movie: any) {
    console.log('movie rented ' + movie.title);
    this.rentalList.push(movie)
  }

  onClearRentalList() {
    this.rentalList = []
  }
}
