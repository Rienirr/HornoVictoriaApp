import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 public logged: boolean =true;

 public set(){
this.logged = !this.logged;
 }
 public get ():boolean{
   return this.logged;
 }

}
