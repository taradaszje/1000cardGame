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
  // todo subscribe incoming data and comparing value (best win etc)
  // todo save to database
  // todo what if page reload
  // todo won prize and other features
  // todo loading data from database
  // todo sending data to database
  ngOnInit() {
  }

}
