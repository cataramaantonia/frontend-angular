import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(
    public firebaseAuth: AngularFireAuth
  ) { }

  async login(payload: {email: string, password: string}) {
    await this.firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(response.user));
      });
  }

  async register(payload: {email: string, password: string}) {
    await this.firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(response.user));
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
