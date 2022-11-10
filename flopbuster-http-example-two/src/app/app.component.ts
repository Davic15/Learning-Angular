import { Component } from '@angular/core';
import { Movie } from './Movie';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flops$: any;
  rentalList: any = [];

  constructor(private movieService: MovieService, 
    private rentalListService: RentalListService) {
  }

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
  }

  getRentalList() {
    this.rentalListService.getRentalList()
    .subscribe(data => {
      this.rentalList = data;
    })
  }

  addToRentalList(flop: any) {
    this.rentalListService.addToRentalList(flop)
    .subscribe(() => {
      this.getRentalList();
    })
  }

  onDeleteItemFromList(flopId: number) {
    this.rentalListService.deleteItem(flopId)
    .subscribe(() => {
      this.getRentalList();
    })
  }
}
