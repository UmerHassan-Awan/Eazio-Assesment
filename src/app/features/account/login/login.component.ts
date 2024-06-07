import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  IsLoading:boolean = false;

  constructor() {}

  showPassword: boolean = true;
  submitted: boolean = false;
  loginError: string = '';

  togglePassword() {
    this.showPassword = !this.showPassword;
  } 

  async handleSubmit() {
    
  }

  
}
