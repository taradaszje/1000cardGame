import {Injectable} from '@angular/core';
import {Player} from './player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private players: Player[] = [];

  constructor() {
  }

  getPlayers() {
    return this.players.slice();
  }

  getPlayer(id: number) {
    return this.players[id];
  }

  setPlayers(players: Player[]) {
    this.players = players;
  }

  addPlayer(player: Player) {
    console.log(player.name);
    if (this.getPlayers().includes(player)) {
      this.players.splice(this.players.indexOf(player), 1);
    } else {
      this.players.push(player);
    }
  }
}
