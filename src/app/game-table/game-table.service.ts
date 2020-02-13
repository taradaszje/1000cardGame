import {GameRowModel} from './game-row/game-row.model';
import {PlayerService} from '../players/player.service';
import {Injectable} from '@angular/core';

@Injectable()
export class GameTableService {
  counter = 1;
  gameRows: GameRowModel[] = [];

  constructor(private playerService: PlayerService) {
  }

  addNewRow(boxValue: HTMLInputElement) {
    const playersScore = boxValue.value.split(' ', this.playerService.getPlayers().length);
    const gameResults = [];
    this.playerService.getPlayers().forEach((player, index) => {
      player.updatePlayerData(playersScore[index]);
      gameResults.push(player.totalScore);
    });
    this.gameRows.push(
      new GameRowModel(this.counter++, gameResults)
    );
  }

  getGameRows() {
    return this.gameRows.slice();
  }

  setGameRows(gameRows: GameRowModel[]) {
    this.gameRows = gameRows;
  }
}
