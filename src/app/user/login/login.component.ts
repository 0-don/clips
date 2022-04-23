import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  inSubmision = false;
  showAlert = false;
  alertMsg = 'Please wait! We are loggin you in';
  alertColor = 'blue';

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are loggin you in';
    this.alertColor = 'blue';
    this.inSubmision = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      console.error(e);
      this.alertMsg =
        'An unexpected error has occurred. Please try again later.';
      this.alertColor = 'red';
      this.inSubmision = false;
      return;
    }

    this.alertMsg = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }
}
