import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OpponentSuggestionsResultElement} from "../models/opponent-suggestions-result-element.model";

@Component({
    selector: 'opponent-list-element',
    templateUrl: './opponent-list-element.component.html',
    styleUrl: './opponent-list-element.component.sass'
})
export class OpponentListElementComponent {

    @Input() accountId: string | null = null;
    @Input() opponent: OpponentSuggestionsResultElement | null = null;
    @Output() sendGameInvite: EventEmitter<string> = new EventEmitter<string>();
    @Output() acceptGameInvite: EventEmitter<string> = new EventEmitter<string>()

}
