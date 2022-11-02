import { Component } from '@angular/core';
import { RentalListService } from './rental-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-child';

  constructor(public rentalListService: RentalListService) {}

  wingCommander = {
    title: "Wing Commander",
    yearReleased: 1999,
    rating: "PG-13",
    imdbLink: "https://www.imdb.com/title/tt0131646/",
    image: "assets/images/wing.jpg",
    soundtrack: {
      spotifyLink: "https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw"
    }
  }

  theRoom = {	
		"title": "The Room",
		"year": 2003,
		"stars": 3.7,
		"rating": "R",
		"director": "Tommy Wiseau",
		"cast": ["Tommy Wiseau", "Juliette Danielle", "Greg Sestero"],
		"imdblink": "https://www.imdb.com/title/tt0368226/",
		"image": "assets/images/cat.jpg"
	}

  /*addRental(movie: any) {
    this.rentalList.count++;
    this.rentalList.titles += ', ' + movie.title;
  }*/

  onRentMovie(movie: any) {
    this.rentalListService.rentMovie(movie)
  }

  onClearRentalList(){
    this.rentalListService.clear();
  }
}
