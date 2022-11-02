import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RentalListService {
    currentRentals = {
        count: 1,
        titles: 'Cats'
    }

    rentMovie(movie: any) {
        console.log('movie rented ' + movie.title)
        this.currentRentals.count++;
        this.currentRentals.titles += ', ' + movie.title;
      }
    
    clear(){
        console.log("Clear Clicked");
        this.currentRentals.count = 0;
        this.currentRentals.titles = '';
    }
}