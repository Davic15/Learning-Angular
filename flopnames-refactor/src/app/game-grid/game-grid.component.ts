import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../game.service';
import { Tile } from '../models/Tile';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.css']
})
export class GameGridComponent {
  @Output() teamWon = new EventEmitter();

  constructor(public game: GameService) {}

  selectTile(tile: Tile ) {
    tile.displayClass = tile.tileType;
    this.game.countTile(tile.displayClass);
    if(this.game.checkForWinner(tile.displayClass)) {
      this.teamWon.emit(this.game.winner)
    }
  }
}
