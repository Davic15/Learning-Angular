import { Component } from '@angular/core';
import { Movie } from './Movie';
import { MovieService } from './movie.service'
import { ActorService } from './actor.service';
import { WatchListService } from './watch-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-http';
  flops: Movie[] = [];
  actors: any;
  actors$: any;
  watchList: any = [];
  flops$: any;

  constructor(private movieService: MovieService, private actorService: ActorService, private watchListService: WatchListService) {}

  ngOnInit() {
    this.flops$ = this.movieService.getMovie()
    /*.subscribe((movie: any) => {
      this.flops = movie
      console.log(this.flops)
    })*/

    this.actors$ = this.actorService.getActor()
    /*.subscribe((actor: any) => {
      this.actors = actor
      console.log(this.actors)
    })*/

    this.watchListService.getWachtList()
    .subscribe((watchList: any) => {
      this.watchList = watchList
      console.log(this.watchList)
    })
    this.watchListService.getWatchListSortedBy('price')
    .subscribe((watchList: any) => {
      this.watchList = watchList
      console.log(this.watchList)
    })
  }

  getWatchList() {
    //* This method is to refresh automatically the list.
    this.watchList = this.watchListService.getWachtList()
  }

  addFlopWatchList(item: any) {
    this.watchListService.addTowatchList(item)
    .subscribe();
  }

  changeOnSale(flop: any) {
    flop.onSale = !flop.onSale;
    this.movieService.updateFlop(flop)
    .subscribe(response => {
      console.log(response)
    });
  }

  deleteItem(flop: any) {
    this.watchListService.deleteItem(flop)
    .subscribe(() => {
      this.flops$ = this.movieService.getMovie()


    })
  }
}
