import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

  handleLogin(loginFormState: NgForm): void{
    console.log(loginFormState);
    // submittable form data
    console.log(loginFormState.value);

    this.authService.login(loginFormState.value)
      .subscribe( (res: any) => {
        console.log(res);

        // save the token in cookies / session storage / local storage
        localStorage.setItem('token', res.token);

      });
  }

}
