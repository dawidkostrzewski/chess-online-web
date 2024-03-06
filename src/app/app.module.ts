import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {HttpClientModule} from "@angular/common/http";
import {AccountService} from "./security/account.service";
import { MainMenuComponent } from './utils/main-menu/main-menu.component';
import { UserWidgetComponent } from './utils/user-widget/user-widget.component';
import { TopBarComponent } from './utils/top-bar/top-bar.component';
import {WebSocketService} from "./utils/service/web-socket.service";
import {IconsModule} from "./utils/icons/icons.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {NotificationPanelModule} from "./notification-panel/notification-panel.module";

function initializeApp(keycloak: KeycloakService, accountService: AccountService) {
    return async () => {
        await keycloak.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'chess-online',
                clientId: 'chess-online-web',
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false,
            },
            bearerExcludedUrls: ["http://localhost:8081/chess-online-core/websocket"]
        });

        accountService.ACCOUNT_INFO = await keycloak.loadUserProfile();

        const accountReady = await accountService.checkAccountIsReady();

        if (accountReady) return true;

        await accountService.prepareAccountOnFirstLogin();

        return true;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        MainMenuComponent,
        UserWidgetComponent,
        TopBarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        KeycloakAngularModule,
        HttpClientModule,
        IconsModule,
        NotificationPanelModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            multi: true,
            deps: [KeycloakService, AccountService],
        },
        AccountService,
        WebSocketService,
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
