import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {
  }
  async register(payload: any) {
    await this.firebaseService.register(payload)
      .then(response => this.router.navigate(['']));
  }
}
