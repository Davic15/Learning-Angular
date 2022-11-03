import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    redTilesSelected = 0;
    blueTilesSelected  = 0;
    currentTeam = 'Red';

    gridKey = [
        ['blue',      'neutral',  'red'],
        ['assassin',  'blue',     'neutral'],
        ['neutral',   'neutral',  'red']
    ]

    checkForWinner(tileCategory: string) {
        if (this.redTilesSelected === 2) {
            return { win: true, team: 'red' }
        }
        if (this.blueTilesSelected === 2) {
            return { win: true, team: 'blue' }
        }
        if (tileCategory === 'assassin') {
            if(this.currentTeam.toLowerCase() === 'red') {
                return { win: true, team: 'blue' }
            } else {
                return { win: true, team: 'red' }
            }
        }
        return { win: false, team: 'no' }
    }

    countTile(tileCategory: string) {
        if(tileCategory === 'red') {
            this.redTilesSelected++;
        }
        if(tileCategory === 'blue') {
            this.blueTilesSelected++;
        }
    }
}