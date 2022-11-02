import { Component, OnInit, Input } from '@angular/core';
import { FlopChooserService } from './flop-chooser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flopbuster-example-two';
  flops: any;
  isCorrect = false;
  hasChosen = false;

  constructor(public flopChooser: FlopChooserService) {}

  ngOnInit(): void {
    this.selectNewFlops();
  }

  selectNewFlops() {
    this.flops = this.flopChooser.getTwoRandomFlops();
  }

  onFirstSelected() {
    if(!this.hasChosen) {
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.first, this.flops.second);
      console.log(this.isCorrect)
    }
  }

  onSecondSelected() {
    if(!this.hasChosen) {
      this.hasChosen = true;
      this.isCorrect = this.flopChooser.isChoiceCorrect(this.flops.second, this.flops.first);
      console.log(this.isCorrect)
    }
  }

  onPlayAgainClicked() {
    this.hasChosen = false;
    this.selectNewFlops();
  }
}
