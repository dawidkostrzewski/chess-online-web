import {Component, Input} from '@angular/core';
import {LatestGame} from "../../../../shared/models/game/latest-game.model";

@Component({
    selector: 'latest-games-list-element',
    templateUrl: './latest-games-list-element.component.html',
    styleUrl: './latest-games-list-element.component.sass'
})
export class LatestGamesListElementComponent {

    @Input() game: LatestGame | null = null;

}
