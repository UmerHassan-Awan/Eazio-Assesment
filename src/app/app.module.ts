import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/account/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthScreenHeaderComponent } from './features/account/components/auth-screen-header/auth-screen-header.component';
import { SignUpComponent } from './features/account/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AuthScreenHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    TabViewModule,
    DropdownModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
