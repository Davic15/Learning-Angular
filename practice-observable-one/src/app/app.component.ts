import { Component, OnInit } from '@angular/core';
import { oActor, oName, oFlops } from './Observables';
import { pipe, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-observable-one';
  name: string = '';
  flops: any;

  ngOnInit() {
    /*
      1. log out the actor's name from the oActor
        can you do it by modifying the stream before you subscribe to it?
      2. set the name property of this component to be the data in the oName observable
      3. get the flops out of the oFlops observable and get them displaying on the screen
    */
    oActor
    .pipe(map(response => {
      return response.name
    }))
    .subscribe(response => {
      console.log(response);
    })

    oName.subscribe(response => {
      this.name = response;
    })

    oFlops.subscribe(response => {
      this.flops = response;
    })
  }
}
