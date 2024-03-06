import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./security/auth-guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'games',
        loadChildren: () => import('./games/games.module').then(m => m.GamesModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'ranking',
        loadChildren: () => import('./ranking/ranking.module').then(m => m.RankingModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'profile-settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
