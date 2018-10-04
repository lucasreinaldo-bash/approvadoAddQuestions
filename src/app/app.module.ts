import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { TaskComponent }  from './todo/task.component';


export const firebaseConfig = {
    apiKey: "AIzaSyA6D-0y_W6JRcTWF46t5V5MvSusIKULDdg",
    authDomain: "approvado-2212.firebaseapp.com",
    databaseURL: "https://approvado-2212.firebaseio.com",
    storageBucket: "approvado-2212.appspot.com",
    messagingSenderId: "131379671159"
};



@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AngularFireModule.initializeApp(firebaseConfig) ],
    declarations: [ AppComponent, TaskComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
