import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/account/login/login.component';
import { SignUpComponent } from './features/account/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
