import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {KeycloakProfile} from "keycloak-js";
@Injectable()
export class AccountService {

    SERVICE_PATH: string = '/chess-online-core'
    private _ACCOUNT_INFO: KeycloakProfile | null = null;

    constructor(private http: HttpClient) {
    }

    checkAccountIsReady(): Promise<boolean> {
        const url = `${this.SERVICE_PATH}/player/check_account_ready`;

        return firstValueFrom(this.http.post<boolean>(url, {accountId: this.ACCOUNT_INFO?.id}));
    }

    prepareAccountOnFirstLogin(): Promise<string> {
        const url = `${this.SERVICE_PATH}/player/create`;

        return firstValueFrom(this.http.post<string>(url, {accountId: this.ACCOUNT_INFO?.id}));
    }

    get ACCOUNT_INFO(): KeycloakProfile | null {
        return this._ACCOUNT_INFO;
    }

    set ACCOUNT_INFO(value: KeycloakProfile | null) {
        this._ACCOUNT_INFO = value;
    }
}
