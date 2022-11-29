import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = {
    emailAddress: '',
    password: ''
  };
  submit(email: string, password: string) {
    console.log(email, password)
  }

  login(formval: any) {
    
    console.log(formval);
    console.log('model', this.model)
  }
}
