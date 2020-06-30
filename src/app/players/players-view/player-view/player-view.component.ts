import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../player.model';
import {ActivatedRoute, Router} from "@angular/router";
import {GameTableService} from "../../../game/game-table/game-table.service";
import {PlayerService} from "../../player.service";

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  @Input() playerId: number;
  @Input() player: Player;
  playerNumber = 0;
  constructor(private router: ActivatedRoute,
              private gameTableService: GameTableService,
              private playerService: PlayerService) { }
  ngOnInit() {
    this.gameTableService.gameRowEmitter.subscribe(() => {
      this.playerNumber = this.gameTableService.gameRows.length % this.playerService.getPlayers().length;
    })
  }

}
