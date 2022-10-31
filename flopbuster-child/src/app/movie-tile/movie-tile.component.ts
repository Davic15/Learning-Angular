import { Component, Input } from "@angular/core";

@Component({
    selector: 'my-movie-tile',
    templateUrl: './movie-tile.component.html',
    styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent {
    @Input() movie: any;
}