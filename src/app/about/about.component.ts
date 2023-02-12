import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  isLoggedIn!: boolean;
  constructor(
    private router: Router,
    public firebaseService: FirebaseService
  ) {
  }

ngOnInit() {
  this.isLoggedIn = localStorage.getItem('user') !== undefined;
}

goToLogin() {
  this.router.navigate(['login'])
}

goToRegister() {
  this.router.navigate(['register'])
}

logout() {
  this.isLoggedIn = false;
  this.firebaseService.logout();
}
}
