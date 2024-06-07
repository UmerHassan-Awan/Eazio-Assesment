import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPreviewComponent } from './components/main-preview/main-preview.component';
import { DashboardOneComponent } from './dashboard-one/dashboard-one.component';

const routes: Routes = [
    { path: '', component: DashboardOneComponent },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }