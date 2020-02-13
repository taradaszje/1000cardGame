import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayerDetailsComponent} from './players/player-details/player-details.component';
import {PlayersComponent} from './players/players.component';


const routes: Routes = [
  {path: 'players', component: PlayersComponent, children: [
      {path: ':id', component: PlayerDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
