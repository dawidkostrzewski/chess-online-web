import {Component, Input} from '@angular/core';
import {LatestGame} from "../../../shared/models/game/latest-game.model";

@Component({
  selector: 'games-list-element',
  templateUrl: './games-list-element.component.html',
  styleUrl: './games-list-element.component.sass'
})
export class GamesListElementComponent {

    @Input() game: LatestGame | null = null;

}
