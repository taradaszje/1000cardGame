import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../player.model';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css']
})
export class PlayersViewComponent implements OnInit {

  players: Player[] = [];
  constructor(public playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();

  }

}
