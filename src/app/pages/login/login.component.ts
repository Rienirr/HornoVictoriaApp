import { Component, OnInit } from '@angular/core';
import { userLogin } from '../../shared/interfaces/user.interface';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorLogin : boolean = false;
 public usuario : userLogin={
   email: '',
   password: ''
 }
  constructor(private LoginService: LoginService,
    private router: Router) { 
      
    }

  logIn(){
    const {email, password} = this.usuario;
    this.LoginService.login(email,password).then( response =>{
      if(response?.operationType==="signIn") {
        this.router.navigate(["./home"]);
        this.LoginService.logged= false;
      }else this.errorLogin= true;

    });
  }
  logInGoogle(){
    const {email, password} = this.usuario;
    this.LoginService.loginWithGoogle(email,password).then( response =>{
      if(response?.operationType==="signIn") {
        this.router.navigate(["./home"]);
        this.LoginService.logged= false;
      }else this.errorLogin= true;


  });

  }
}
