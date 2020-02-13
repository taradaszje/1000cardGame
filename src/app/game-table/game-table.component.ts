import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../players/player.service';
import {GameRowModel} from './game-row/game-row.model';
import {GameTableService} from './game-table.service';
import {DataStorageService} from '../db-service/data-storage.service';


@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent implements OnInit {
  playersNames: string[] = [];
  counter = 1;
  gameRows: GameRowModel[] = [];

  constructor(private playerService: PlayerService,
              private gameTableService: GameTableService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().forEach((player) => {
      this.playersNames.push(player.name);
    });
  }

  addNewRow(boxValue: HTMLInputElement) {
    this.gameTableService.addNewRow(boxValue);
    this.dataStorageService.storeGameRows();
    this.gameRows = this.gameTableService.getGameRows();
  }
}

