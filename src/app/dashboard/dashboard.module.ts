import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardService} from "./service/dashboard.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import { ProfileOverviewComponent } from './components/profile-overview/profile-overview.component';
import { OpponentSuggestionsComponent } from './components/opponent-suggestions/opponent-suggestions.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';
import {IconsModule} from "../utils/icons/icons.module";
import { OpponentListElementComponent } from './components/opponent-suggestions/opponent-list-element/opponent-list-element.component';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatButton, MatIconButton} from "@angular/material/button";
import { InvitesComponent } from './components/invites/invites.component';
import { GameInvitesComponent } from './components/invites/game-invites/game-invites.component';
import { FriendInvitesComponent } from './components/invites/friend-invites/friend-invites.component';
import { LatestGamesListElementComponent } from './components/latest-games/latest-games-list-element/latest-games-list-element.component';


@NgModule({
    declarations: [
        DashboardPageComponent,
        ProfileOverviewComponent,
        OpponentSuggestionsComponent,
        FriendsListComponent,
        LatestGamesComponent,
        OpponentListElementComponent,
        InvitesComponent,
        GameInvitesComponent,
        FriendInvitesComponent,
        LatestGamesListElementComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatProgressBar,
        IconsModule,
        MatMenu,
        MatMenuTrigger,
        MatIconButton,
        MatMenuItem,
        MatButton
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {
}
