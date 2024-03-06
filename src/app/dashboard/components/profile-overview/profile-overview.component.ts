import { Component } from '@angular/core';
import {GetDashboardStatisticsResult} from "../../models/get-dashboard-statistics-result.model";
import {DashboardService} from "../../service/dashboard.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {WebSocketService} from "../../../utils/service/web-socket.service";
import {AccountService} from "../../../security/account.service";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.sass'
})
export class ProfileOverviewComponent {

    statistics: GetDashboardStatisticsResult | null = null;
    profileImage: SafeHtml | undefined;
    loading: boolean = false;
    accountInformation: KeycloakProfile | null;
    constructor(private service: DashboardService,
                private sanitizer: DomSanitizer,
                private accountService: AccountService) {
        this.accountInformation = accountService.ACCOUNT_INFO;
    }

    ngOnInit(): void {
        this.loadPlayerStatistics();
    }

    loadPlayerStatistics() {
        this.service.getDashboardStatistics().subscribe({
            next: statistics => {
                this.statistics = statistics;
                this.profileImage = this.sanitizer.bypassSecurityTrustUrl(statistics.profileImage);
                this.loading = false
            },
            error: err => {
                this.loading = false;
            }
        });
    }
}
