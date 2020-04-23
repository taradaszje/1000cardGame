import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Player} from '../player.model';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-player-choice',
  templateUrl: './player-choice.component.html',
  styleUrls: ['./player-choice.component.css'],
  animations: [
    trigger('clickedNotClicked', [
      state('notClicked', style({
        height: '150px',
        width: '150px',
        color: 'white',
        fontSize: '20px',
        border: '1px solid black',
        borderRadius: '15px'
      })),
      state('clicked', style({
        height: '250px',
        color: 'snow',
        width: '250px',
        fontSize: '35px',
        border: '1px solid gray',
        borderRadius: '15px'
      })),
      transition(':enter', []),
      transition('notClicked => clicked', [
        animate('1s')
      ]),
      transition('clicked => notClicked', [
        animate('1s')
      ]),
    ])
  ]
})
export class PlayerChoiceComponent implements OnInit {
  isClicked = true;
  @Input() player: Player;

  constructor(private playerService: PlayerService) {
  }

  toggleIsClicked() {
    this.isClicked = !this.isClicked;
    this.playerService.addPlayer(this.player);
    console.log(this.playerService.getPlayers().length);
  }

  ngOnInit() {
  }

  onKey(event: any) {
    this.player.name = event.target.value;
  }
}
