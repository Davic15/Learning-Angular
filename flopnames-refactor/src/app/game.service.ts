import { Injectable } from '@angular/core';
import { Team } from './models/Team';
import { Tile } from './models/Tile';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    redTeam: Team = { displayName: 'Red' }
    blueTeam: Team = { displayName: 'Blue' }
    blueTilesSelected = 0;
    redTilesSelected = 0;
    winner: Team = this.redTeam;
    gameOver = false;
    currentTeam: Team = this.redTeam;

    tiles: Tile[] = [ 
        { text: 'Battlefield Earth', x: 0, y: 0, tileType: 'blue', displayClass: '' },
        { text: 'Howard the Duck', x: 0, y: 1, tileType: 'neutral', displayClass: '' },
        { text: 'Batman and Robin', x: 0, y: 2, tileType: 'red', displayClass: '' },
        { text: 'Catwoman', x: 1, y: 0, tileType: 'assassin', displayClass: '' },
        { text: 'Jack and Jill', x: 1, y: 1, tileType: 'blue', displayClass: '' },
        { text: 'Cats', x: 1, y: 2, tileType: 'neutral', displayClass: '' },
        { text: 'Wing Commander', x: 2, y: 0, tileType: 'neutral', displayClass: '' },
        { text: 'Dudley Do-Right', x: 2, y: 1, tileType: 'neutral', displayClass: '' },
        { text: 'Twilight', x: 2, y: 2, tileType: 'red', displayClass: '' }
    ];

    countTile(tileCategory: string) {
        if(tileCategory === 'blue') {
            this.blueTilesSelected++
        } else if(tileCategory === 'red') {
            this.redTilesSelected++
        }
    }

    checkForWinner(tileCategory: string) {
        if(this.blueTilesSelected === 2) {
            this.setWinner(this.blueTeam);
        } else if(this.redTilesSelected === 2) {
            this.setWinner(this.redTeam);
        } else if(tileCategory === 'assassin') {
            if(this.currentTeam === this.redTeam) {
                this.setWinner(this.blueTeam);
            } else {
                this.setWinner(this.redTeam);
            }
        }
        return this.gameOver;
    }

    setWinner(winningTeam: Team) {
        this.winner = winningTeam;
        this.gameOver = true;
    }
}