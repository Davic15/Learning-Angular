import { Component, OnInit } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  selector: 'app-flop-suggestion',
  templateUrl: './flop-suggestion.component.html',
  styleUrls: ['./flop-suggestion.component.css']
})
export class FlopSuggestionComponent {
  model = <Suggestion> {};
  rating = 'unrated';

  suggestions: Suggestion[] = [
    { id: 0, title: "Ender's Game", year: 2013, stars: 6.6, studio: "Other", rating: "PG-13", hasSoundtrack: true },
    { id: 1, title: "The Mummy", year: 2017, stars: 5.4 , studio: "Universal", rating: "PG-13", hasSoundtrack: false },
    { id: 2, title: "A Wrinkle in Time", year: 2018, stars: 4.2 , studio: "Disney", rating: "PG", hasSoundtrack: true },
  ]

  ngOnInit() {
  }

  editSuggestion(suggestion: Suggestion, form: any) {
    this.model = {...suggestion}
    this.resetForm(form)
  }

  resetForm(form: any) {
    form.markAsPristine();
    form.markAsUntouched();
  }

  updateSuggestion(form: any) {
    if (form.valid) {
      let editSuggestion = this.suggestions.find((currentSuggestion: any) => currentSuggestion.id === this.model.id);
      editSuggestion!.title = this.model.title;
      editSuggestion!.year = +this.model.year;
      editSuggestion!.stars = +this.model.stars;
      editSuggestion!.studio = this.model.studio;
      editSuggestion!.rating = this.model.rating;
      editSuggestion!.hasSoundtrack = this.model.hasSoundtrack;
      this.model = <Suggestion> {};
      this.resetForm(form.form)
    }
  }

  cancel(form: any) {
    this.model = <Suggestion> {};
    this.resetForm(form)
  }
}
