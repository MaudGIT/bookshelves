import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
  	var config = {
	    apiKey: "AIzaSyDi41iinBS9G39vF3qvoXj7hSw5SWhkJJc",
	    authDomain: "bookshelves-21347.firebaseapp.com",
	    databaseURL: "https://bookshelves-21347.firebaseio.com",
	    projectId: "bookshelves-21347",
	    storageBucket: "bookshelves-21347.appspot.com",
	    messagingSenderId: "1030732533888"
	  };
	  firebase.initializeApp(config);
  }
}
