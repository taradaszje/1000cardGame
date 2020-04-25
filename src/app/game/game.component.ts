import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PlayerService} from '../players/player.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(public playerService: PlayerService, private changeDetection: ChangeDetectorRef) { }

  ngOnInit() {
    setInterval(this.changeDetection.detectChanges, 10000);
  }

}
