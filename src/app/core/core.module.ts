import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        SidebarComponent,
        AppHeaderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CoreRoutingModule,
    ],
    exports: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CoreModule { }