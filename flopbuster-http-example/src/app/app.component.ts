import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { RentalListService } from './rental-list.service';
import { ActorService } from './actor.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-http-example';
  flops$: any;
  rentalList = [];
  loggedIn = false;

  constructor(private movieService: MovieService, 
    private rentalListService: RentalListService,
    private actorService: ActorService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
  }

  onLogin() {
    this.authService.getCredentials()
    .subscribe(() => {
      this.loggedIn = !this.loggedIn
    });
    // also show the movies and hide the login button but ONLY after the server has acknowledged that you've logged in
  }

  addToRentalList(flop: any) {
    //console.log('here')
  }
}
