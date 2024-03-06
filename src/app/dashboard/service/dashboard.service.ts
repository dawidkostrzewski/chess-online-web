import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "../../security/account.service";
import {Observable} from "rxjs";
import {GetDashboardStatisticsResult} from "../models/get-dashboard-statistics-result.model";
import {OpponentSuggestionsResult} from "../components/opponent-suggestions/models/opponent-suggestions-result.model";
import {GetLatestGamesResult} from "../../shared/models/game/get-latest-games-result.model";

@Injectable()
export class DashboardService {

    private SERVICE_URL = '/chess-online-core';

    constructor(private http: HttpClient, private accountService: AccountService) {
    }

    getDashboardStatistics(): Observable<GetDashboardStatisticsResult> {

        const url = this.SERVICE_URL + `/dashboard/statistics/${this.accountService.ACCOUNT_INFO?.id}`;

        return this.http.get<GetDashboardStatisticsResult>(url);
    }

    getOpponentSuggestions(): Observable<OpponentSuggestionsResult> {
        const url = this.SERVICE_URL + `/user/opponent-suggestions/${this.accountService.ACCOUNT_INFO?.id}`;

        return this.http.get<OpponentSuggestionsResult>(url);
    }

    sendGameInvite(invitedId: string): Observable<String> {
        const url = this.SERVICE_URL + `/game/invite`;

        return this.http.post<String>(url, {requesterId: this.accountService.ACCOUNT_INFO?.id, invitedId: invitedId});
    }

    getLatestPlayerGames(): Observable<GetLatestGamesResult> {
        const url = this.SERVICE_URL + `/games/latest/${this.accountService.ACCOUNT_INFO?.id}?offset=0&limit=5`;

        return this.http.get<GetLatestGamesResult>(url);
    }

    acceptInvite(inviteId: string): Observable<any> {
        const url = this.SERVICE_URL + `/game/invite/accept`;

        return this.http.post(url, {inviteId: inviteId});
    }
}
