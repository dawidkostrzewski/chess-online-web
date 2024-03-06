import { Component } from '@angular/core';
import {MenuItem} from "./models/menu-item.model";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.sass'
})
export class MainMenuComponent {
    MENU_ITEMS: MenuItem[] = [
        {
            link: 'dashboard',
            icon: 'chess-king'
        },
        {
            link: 'games',
            icon: 'chessboard'
        },
        {
            link: 'ranking',
            icon: 'leaderboard'
        },
        {
            link: 'profile-settings',
            icon: 'settings'
        }
    ]

}
