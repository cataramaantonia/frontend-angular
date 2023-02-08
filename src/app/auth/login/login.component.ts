import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {
  }
  async login(payload: any) {
    await this.firebaseService.login(payload)
      .then(response => this.router.navigate(['']));
  }
}
