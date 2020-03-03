import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../players/player.service';
import {Player} from '../players/player.model';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  players: Player[] = [
    new Player('Jaroslaw', 'http://smail.zdunskawola.pl/www/portal?id=50015&res_id=432607', 1, 4,
        220, 180),
    new Player('Patryk', 'https://static.goldenline.pl/user_photo/213/user_5236181_dd8644_huge.jpg', 2, 4,
        190, 150),
    new Player('Olej', 'https://sphoto.nasza-klasa.pl/21206577/2/square/610af03f3c.jpeg?v=1', 1, 4,
        180, 140),
    new Player('Majcher', 'https://i.imgur.com/KdqJPFp.jpg', 1, 2, 0, 0)
  ];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
  }

  startGame() {
    this.playerService.setPlayers(this.players.filter(player => player.isClicked === true));
  }
}
