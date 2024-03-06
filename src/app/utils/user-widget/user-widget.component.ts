import {Component} from '@angular/core';
import {AccountService} from "../../security/account.service";
import {KeycloakService} from "keycloak-angular";

@Component({
    selector: 'user-widget',
    templateUrl: './user-widget.component.html',
    styleUrl: './user-widget.component.sass'
})
export class UserWidgetComponent{

    userLogin: string | undefined;
    showActions: boolean = false;
    constructor(private accountService: AccountService, private keycloak: KeycloakService) {
        this.userLogin = accountService.ACCOUNT_INFO?.username;
    }

    changeActionsVisibility() {
        this.showActions = !this.showActions;
    }

    async logout() {
        await this.keycloak.logout();
    }
}
