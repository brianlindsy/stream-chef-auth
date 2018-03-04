import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit{

state: string = '';
name: any;

  constructor(public afAuth: AngularFireAuth,private router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth) {
      	console.log(auth);
        this.name = auth;
      }
    });

  }

  logout() {
     this.afAuth.auth.signOut();
     console.log('logged out');
     this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
	
}
