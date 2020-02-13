import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../players/player.service';
import {GameRowModel} from './game-row/game-row.model';


@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  playersNames: string[] = [];
  counter = 1;
  gameRows: GameRowModel[] = [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().forEach((player) => {
      this.playersNames.push(player.name);
    });
  }
// todo najwyzsza przegrana
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
}

