import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.css']
})
export class MovieSelectorComponent {
    @Input() movie: any;
    @Output() select = new EventEmitter();

    onClick() {
        this.select.emit();
    }
}