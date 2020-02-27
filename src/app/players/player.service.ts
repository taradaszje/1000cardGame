import {Injectable} from '@angular/core';
import {Player} from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players = [
    new Player('Jaroslaw', 'http://smail.zdunskawola.pl/www/portal?id=50015&res_id=432607', 1, 4,
      220, 180),
    new Player('Patryk', 'https://static.goldenline.pl/user_photo/213/user_5236181_dd8644_huge.jpg', 2, 4,
      190, 150),
    new Player('Olej', 'https://sphoto.nasza-klasa.pl/21206577/2/square/610af03f3c.jpeg?v=1', 1, 4,
      180, 140),
    new Player('Majcher', 'https://i.imgur.com/KdqJPFp.jpg', 1, 2, 0, 0)
  ];

  constructor() {
  }

  getPlayers() {
    return this.players.slice();
  }

  getPlayer(id: number) {
    return this.players[id];
  }

  setPlayers() {
    this.players = this.players.filter( player => player.isClicked );
  }
}
