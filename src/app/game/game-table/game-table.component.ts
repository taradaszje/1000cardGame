import {Component, OnInit} from '@angular/core';
import {GameRowModel} from './game-row.model';
import {GameTableService} from './game-table.service';
import {PlayerService} from '../../players/player.service';
import {DataStorageService} from '../../db-service/data-storage.service';


@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  playersNames: string[] = [];
  gameRows: GameRowModel[] = [];

  constructor(private playerService: PlayerService,
              private gameTableService: GameTableService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().forEach((player) => {
      this.playersNames.push(player.name);
    });
    this.dataStorageService.getData();
  }
}

