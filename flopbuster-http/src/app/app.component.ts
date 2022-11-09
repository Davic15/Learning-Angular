import { Component } from '@angular/core';
import { Movie } from './Movie';
import { MovieService } from './movie.service'
import { ActorService } from './actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-http';
  flops: Movie[] = [];
  actors: any;

  constructor(private movieService: MovieService, private actorService: ActorService) {}

  ngOnInit() {
    this.movieService.getMovie()
    .subscribe((movie: any) => {
      this.flops = movie
      console.log(this.flops)
    })

    this.actorService.getActor()
    .subscribe((actor: any) => {
      this.actors = actor
      console.log(this.actors)
    })
  }
}
