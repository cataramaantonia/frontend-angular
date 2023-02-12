import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
