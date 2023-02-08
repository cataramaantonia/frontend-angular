import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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
