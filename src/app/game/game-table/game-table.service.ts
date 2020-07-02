import {EventEmitter, Injectable} from '@angular/core';
import {PlayerService} from '../../players/player.service';

@Injectable({providedIn: 'root'})
export class GameTableService {

  gameRows: number[][] = [];
  gameRowEmitter = new EventEmitter<number[]>();
  playersNumber = 0;

  constructor(private playerService: PlayerService) {
    this.playersNumber = this.playerService.getPlayers().length;
  }

  processData(gameRow: number[]) {
    if (!gameRow.includes(1001)) {
      this.playerService.getPlayers().forEach((player, index) => {
        player.updatePlayerData(gameRow[index]);
      });
      const value = this.addNewRowToLastRow(gameRow);
      this.gameRows.push(value);
      this.gameRowEmitter.emit(value);
    } else {
      const bombRow = this.addActualScoresToBombRow(gameRow);
      this.gameRows.push(bombRow);
      this.gameRowEmitter.emit(bombRow);
    }
  }
  addActualScoresToBombRow(bombRow: number[]) {
    for(let i = 0; i < bombRow.length; i++){
      if(bombRow[i] !== 1001){
        bombRow[i] += this.playerService.getPlayers()[i].totalScore;
      }
    }
    return bombRow;
}
  addNewRowToLastRow(databaseRow: number[]) {
    if (this.getGameRows().length === 0) {
      return databaseRow;
    }
    for (let i = 0; i < databaseRow.length; i++) {
      if (this.gameRows.slice(-1)[0][i] !== 1001) {
        databaseRow[i] += this.gameRows.slice(-1)[0][i]; // get last row and add scores
      }else {
        databaseRow[i] = this.playerService.getPlayers()[i].totalScore;
      }
    }
    return databaseRow;
  }

  getGameRows() {
    return this.gameRows.slice();
  }

}
