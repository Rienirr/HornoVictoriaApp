import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

const firebaseConfig = {

  apiKey: "AIzaSyBzA7bJhfOwXAiwL_2cBWFYOqSxQvhwTbg",

  authDomain: "panaderiavictoria-90484.firebaseapp.com",

  projectId: "panaderiavictoria-90484",

  storageBucket: "panaderiavictoria-90484.appspot.com",

  messagingSenderId: "603001051978",

  appId: "1:603001051978:web:aae5852a066b66d6b2bfb3",

  measurementId: "G-K0EY1Y0HLT"

};

@NgModule({
  declarations: [
    AppComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(firebaseConfig),
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
