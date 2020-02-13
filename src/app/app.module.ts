import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { GameTableComponent } from './game-table/game-table.component';
import { PlayersViewComponent } from './players/players-view/players-view.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayerViewComponent } from './players/players-view/player-view/player-view.component';
import { PlayersComponent } from './players/players.component';
import { GameRowComponent } from './game-table/game-row/game-row.component';
import { PlayerGameComponent } from './game-table/player-game/player-game.component';
import {HttpClientModule} from '@angular/common/http';
import {DataStorageService} from './db-service/data-storage.service';
import {GameTableService} from './game-table/game-table.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    GameTableComponent,
    PlayersViewComponent,
    PlayerDetailsComponent,
    PlayerViewComponent,
    PlayersComponent,
    GameRowComponent,
    PlayerGameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataStorageService, GameTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
