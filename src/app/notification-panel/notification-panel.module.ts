import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { GameNotificationComponent } from './game-notification/game-notification.component';
import { InviteToFriendsNotificationComponent } from './invite-to-friends-notification/invite-to-friends-notification.component';
import { InviteToGameNotificationComponent } from './invite-to-game-notification/invite-to-game-notification.component';
import { TieProposeComponent } from './tie-propose/tie-propose.component';



@NgModule({
    declarations: [
        NotificationPanelComponent,
        GameNotificationComponent,
        InviteToFriendsNotificationComponent,
        InviteToGameNotificationComponent,
        TieProposeComponent
    ],
    exports: [
        NotificationPanelComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NotificationPanelModule { }
