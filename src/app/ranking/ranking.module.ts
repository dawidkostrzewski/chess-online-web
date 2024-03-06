import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RankingPageComponent} from './ranking-page/ranking-page.component';
import {RankingRoutingModule} from "./ranking-routing.module";


@NgModule({
    declarations: [
        RankingPageComponent
    ],
    imports: [
        CommonModule,
        RankingRoutingModule
    ]
})
export class RankingModule {
}
