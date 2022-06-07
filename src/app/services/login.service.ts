import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
 public logged: boolean =true;

 constructor (private aFireAuth: AngularFireAuth){

 }
 async login(email: string, password: string){
   try{
    return await this.aFireAuth.signInWithEmailAndPassword(email, password);
   }catch(error){
     return;
   }
 }
 async loginWithGoogle(email: string, password: string){
  try{
   return await this.aFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }catch(error){
    return;
  }
}

async register(email: string, password: string){
  try{
   return await this.aFireAuth.createUserWithEmailAndPassword(email, password);
  }catch(error){
    return;
  }
}
 public set(){
this.logged = !this.logged;
 }
 public get ():boolean{
   return this.logged;
 }

}
