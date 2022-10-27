import { Component } from '@angular/core';
import { Person } from './utilities/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-basic-angular';
  
  person = new Person('David', 'Macias', 35);

  showPersonData() {
    console.log(this.person)
  }

  calculateRnd() {
    return console.log(Math.random());
  }

}


