import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule, HttpClientModule],
  providers: []
})
export class CoreRoutingModule { }