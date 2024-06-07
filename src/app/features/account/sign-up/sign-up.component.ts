import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

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
