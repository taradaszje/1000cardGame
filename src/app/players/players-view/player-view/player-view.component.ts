import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../player.model';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  @Input() playerId: number;
  @Input() player: Player;
  constructor() { }
  ngOnInit() {
  }

}
