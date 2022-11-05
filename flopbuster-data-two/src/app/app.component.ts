import { Component, OnInit } from '@angular/core';
import { FLOP_DATA } from './FLOP_DATA';
import { ACTORS } from './FLOP_DATA_PIPE';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-data-two';
  
  flopDataPipe: any;

  rentalList: string[] = [];
  flopData;

  constructor(private titleService: Title) {
    this.flopData = FLOP_DATA
    this.flopDataPipe = ACTORS;
    titleService.setTitle('Flopbox')
  }

  onRentMovie(movie: any) {
    console.log('movie rented ' + movie.title);
    this.rentalList.push(movie)
  }

  onClearRentalList() {
    this.rentalList = []
  }

  ngOnInit(): void {
    console.log(this.flopDataPipe[0].name)
  }
}
