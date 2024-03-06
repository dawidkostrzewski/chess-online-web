import {Injectable} from "@angular/core";
import {KeycloakAuthGuard, KeycloakService} from "keycloak-angular";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AccountService} from "./account.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

    constructor(
        protected override readonly router: Router,
        protected readonly keycloak: KeycloakService,
        private accountService: AccountService
    ) {
        super(router, keycloak);
    }

    async isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean | UrlTree> {

        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url,
            });
        }

        return this.authenticated;
    }
}
