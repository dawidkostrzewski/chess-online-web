import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../service/dashboard.service";
import {Router} from "@angular/router";
import {LatestGame} from "../../../shared/models/game/latest-game.model";

@Component({
    selector: 'latest-games',
    templateUrl: './latest-games.component.html',
    styleUrl: './latest-games.component.sass'
})
export class LatestGamesComponent implements OnInit {

    games: LatestGame[] | null = null;
    loading: boolean = false;

    constructor(private service: DashboardService, private router: Router) {
    }
    ngOnInit(): void {
        this.service.getLatestPlayerGames().subscribe({
            next: response => {
                this.games = response.games;
                this.loading = false;
            },
            error: err => {
                this.loading = false;
            }
        })
    }

    async navigateToGame(gameId: string): Promise<void> {
        await this.router.navigate([`/games/${gameId}`]);
    }

}
