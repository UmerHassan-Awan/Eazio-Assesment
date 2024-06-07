import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainPreviewComponent } from './components/main-preview/main-preview.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';



@NgModule({
  declarations: [
    MainPreviewComponent,
    DashboardOneComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
  ]
})
export class DashboardModule { }
