import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  model:any = { }
  reviewBeingEdited: any;

  numbers = [1,2,3,4,5] 

  reviews: any[] = [
    { flop: "Cats", stars: 3, review: "Fantastic flop! Loved the graphics and the singing!!!" },
    { flop: "Spider-Man 3", stars: 5, review: "Loved the dancing. Some of the best" },
    { flop: "Twilight", stars: 2, review: "Those Vampires were just too scary." },
  ]

  flopList = [
    {title: "Battlefield Earth"},
    {title: "Santa Clause Conquers the Martians"},
    {title: "The Room"},
    {title: "Howard the Duck"},
    {title: "Jack and Jill"},
    {title: "Cats"},
    {title: "Dudley Do-Right"},
    {title: "Batman and Robin"},
    {title: "Catwoman"},
    {title: "The Last Airbender"},
    {title: "Spider-Man 3"},
    {title: "Transformers: Revenge of the Fallen"},
    {title: "Twilight"},
    {title: "Wing Commander"},
  ]

  editing = false;
  creating = false;

  showErrors = false;

  constructor() { }

  ngOnInit() {
  }

  editReview(review: any) {
    this.reviewBeingEdited = review;
    this.editing = true;
    this.model = { ...review }
  }

  resetForm(form: any) {
    this.model = {};
    this.editing = false;
    this.creating = false;
    this.reviewBeingEdited = undefined;
    this.showErrors = false;
  }

  submitForm(form: any) {
    if (this.editing) {
      this.updateReviewForm(form)
    } else {
      this.createReview(form)
    }
  }

  createReview(form: any) {
    if (form.valid) {
      this.reviews.push(this.model);
      this.resetForm(form);
    } else {
      this.showErrors = true;
    }
  }

  updateReviewForm(form: any) {
    if (form.valid) {
      this.reviewBeingEdited.flop = this.model.flop;
      this.reviewBeingEdited.stars = this.model.stars;
      this.reviewBeingEdited.review = this.model.review;
      this.resetForm(form);
    } else {
      this.showErrors = true;
    }
    
  }


  cancel(form: any) {
    this.resetForm(form)
  }
}
