import { Component, OnInit } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  selector: 'app-flop-suggestion',
  templateUrl: './flop-suggestion.component.html',
  styleUrls: ['./flop-suggestion.component.css']
})
export class FlopSuggestionComponent {
  model = <Suggestion> {};

  suggestions: Suggestion[] = [
    { id: 0, title: "Ender's Game", year: 2013, stars: 6.6 },
    { id: 1, title: "The Mummy", year: 2017, stars: 5.4 },
  ]

  ngOnInit() {
  }

  editSuggestion(suggestion: Suggestion) {
    this.model = {...suggestion}
  }

  updateSuggestion() {
    let editSuggestion = this.suggestions.find((currentSuggestion: any) => currentSuggestion.id === this.model.id);
    editSuggestion!.title = this.model.title;
    editSuggestion!.year = +this.model.year;
    editSuggestion!.stars = +this.model.stars;
    this.cancel();
  }

  cancel() {
    this.model = <Suggestion> {};
  }
}
