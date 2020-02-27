import {GameRowModel} from './game-row/game-row.model';
import {Injectable} from '@angular/core';
import {PlayerService} from '../players/player.service';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GameTableService {
  gameRows: GameRowModel[] = [];
  scoresObserver: Subject<GameRowModel[]> = new Subject<GameRowModel[]>();
  constructor(private playerService: PlayerService) {
  }

  processData(gameRow: GameRowModel) {
    this.gameRows.push(gameRow);
    this.playerService.getPlayers().forEach((player, index) => {
      player.updatePlayerData(gameRow.playerScores[index]);
    });
    this.scoresObserver.next(this.gameRows);
    console.log('table' + this.gameRows);
  }

  getGameRows() {
    return this.gameRows.slice();
  }

  setGameRows(gameRows: GameRowModel[]) {
    this.gameRows = gameRows;
  }

}
