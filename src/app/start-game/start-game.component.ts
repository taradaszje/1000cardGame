import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../players/player.service';
import {Player} from '../players/player.model';
import {GameTableService} from '../game-table/game-table.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService, private gameTableService: GameTableService) {
  }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  startGame() {
    this.playerService.setPlayers();
  }
}
