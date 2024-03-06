import {Component, OnDestroy, OnInit} from '@angular/core';
import {GamesService} from "../serivce/games.service";
import {LatestGame} from "../../shared/models/game/latest-game.model";
import {GameUpdateEvent} from "../models/game-update-event.model";
import {WebSocketService} from "../../utils/service/web-socket.service";
import {GAME_TOPIC} from "../../consts";
import {AccountService} from "../../security/account.service";

@Component({
    selector: 'games-list',
    templateUrl: './games-list.component.html',
    styleUrl: './games-list.component.sass'
})
export class GamesListComponent implements OnInit, OnDestroy {

    games: LatestGame[] = [];
    offset: number = 0
    limit: number = 20;
    loading: boolean = false;

    constructor(private service: GamesService, private webSocketService: WebSocketService, private accountService: AccountService) {

        webSocketService.subscribe(GAME_TOPIC, (message: any) => {
            const event: GameUpdateEvent = JSON.parse(message.body);
        });
    }

    ngOnDestroy(): void {
        this.webSocketService.unsubscribe(GAME_TOPIC);
    }

    ngOnInit(): void {
        this.loadPlayerGames();
    }

    loadPlayerGames() {
        this.service.getGamesListForPlayer(this.offset, this.limit).subscribe({
            next: result => {
                this.games = [...this.games, ...result.games];
                this.loading = false;
            },
            error: err => {
                this.loading = false
            }
        })
    }
}
