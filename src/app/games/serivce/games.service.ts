import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "../../security/account.service";
import {Observable} from "rxjs";
import {GetLatestGamesResult} from "../../shared/models/game/get-latest-games-result.model";
import {GameDetails} from "../models/game-details.model";
import {UpdateGameCmd} from "../models/update-game-cmd.model";

@Injectable()
export class GamesService {

    private SERVICE_URL = '/chess-online-core';

    constructor(private http: HttpClient, private accountService: AccountService) {

    }

    getGamesListForPlayer(offset: number, limit: number): Observable<GetLatestGamesResult> {

        const url = this.SERVICE_URL + `/games/latest/${this.accountService.ACCOUNT_INFO?.id}?offset=${offset}&limit=${limit}`;

        return this.http.get<GetLatestGamesResult>(url);
    }

    getGameDetailsById(gameId: string): Observable<GameDetails> {

        const url = this.SERVICE_URL + `/game/details/${gameId}`;

        return this.http.get<GameDetails>(url);
    }

    updateGameStatus(updateGameCmd: UpdateGameCmd): Observable<boolean> {

        const url = this.SERVICE_URL + `/game/update`;

        return this.http.post<boolean>(url, updateGameCmd);
    }
}
