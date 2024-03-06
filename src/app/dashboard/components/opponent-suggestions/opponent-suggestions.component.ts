import {Component, OnInit} from '@angular/core';
import {OpponentSuggestionsResult} from "./models/opponent-suggestions-result.model";
import {DashboardService} from "../../service/dashboard.service";
import {AccountService} from "../../../security/account.service";

@Component({
    selector: 'opponent-suggestions',
    templateUrl: './opponent-suggestions.component.html',
    styleUrl: './opponent-suggestions.component.sass'
})
export class OpponentSuggestionsComponent implements OnInit {

    opponentSuggestions: OpponentSuggestionsResult | null = null;
    loading: boolean = false;
    accountId: string;
    constructor(private service: DashboardService, private accountService: AccountService) {
        this.accountId = <string> accountService.ACCOUNT_INFO?.id;
    }

    ngOnInit(): void {
        this.service.getOpponentSuggestions().subscribe({
            next: opponentSuggestions => {
                this.opponentSuggestions = opponentSuggestions;
                this.loading = false;
            },
            error: err => {
                this.loading = false;
            }
        })
    }

    handleSendGameInvite(opponentId: string): void {
        this.service.sendGameInvite(opponentId).subscribe();
    }

    handleAcceptGameInvite(inviteId: string): void {
        this.service.acceptInvite(inviteId).subscribe();
    }


}
