import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesPageComponent} from './games-page/games-page.component';
import {GamesRoutingModule} from "./games-routing.module.ts";
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import {GamesService} from "./serivce/games.service";
import { GamesListElementComponent } from './games-list/games-list-element/games-list-element.component';
import {MatProgressBar} from "@angular/material/progress-bar";


@NgModule({
    declarations: [
        GamesPageComponent,
        GamesListComponent,
        GameDetailsComponent,
        GamesListElementComponent
    ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        MatProgressBar
    ],
    providers: [
        GamesService
    ]
})
export class GamesModule {
}
