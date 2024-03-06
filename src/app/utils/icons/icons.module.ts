import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconSvg} from "./icons";
import {MatIcon} from "@angular/material/icon";


@NgModule({
    declarations: [
        IconSvg
    ],
    imports: [
        CommonModule,
        MatIcon
    ],
    exports: [
        IconSvg
    ]
})
export class IconsModule {
}
