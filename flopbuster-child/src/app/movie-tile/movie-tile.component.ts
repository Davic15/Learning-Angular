import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'my-movie-tile',
    templateUrl: './movie-tile.component.html',
    styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent {
    @Input() movie: any;
    @Output() rentMovie = new EventEmitter();

    onRentalButtonClick(movie: any) {
        //* send signal/event to parent
        this.rentMovie.emit(movie)
    }
}