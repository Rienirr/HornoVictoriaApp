import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userRegister } from 'src/app/shared/interfaces/user.interface';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent  {
  errorLogin : boolean = false;
  public usuario : userRegister={
    email: '',
    name: '',
    phone: 0,
    surname: '',
    DNI: '',
    password:'',
        
  }

  constructor(private loginService: LoginService,
    private router: Router) { }

    register(){
      const {email, password,DNI,name,surname, phone} = this.usuario;
      this.loginService.register(email,password).then( response =>{
        if(response?.operationType==="signIn") {
          this.router.navigate(["./home"]);
          this.loginService.logged= false;
        }else this.errorLogin= true;
  
      });
    }
}
