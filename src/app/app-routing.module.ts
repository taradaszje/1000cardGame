import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerDetailsComponent} from './players/player-details/player-details.component';
import {PlayersComponent} from './players/players.component';
import {StartGameComponent} from './start-game/start-game.component';
import {GameComponent} from './game/game.component';


const routes: Routes = [
  {path: '', component: StartGameComponent, data: {animation: 'StartPage'}},
  {path: 'game', component: GameComponent, data: { animation: 'GamePage'}, children: [
      {path: 'players', component: PlayersComponent, children: [
          {path: ':id', component: PlayerDetailsComponent}
          ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
