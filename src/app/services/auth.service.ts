import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = this.db.collection('users');
  }

  public async createUser({ email, password, name, age, phoneNumber }: IUser) {
    if (!password) {
      throw new Error('Password not provided!');
    }

    await this.auth.createUserWithEmailAndPassword(email, password);
    await this.usersCollection.add({
      email,
      name,
      age,
      phoneNumber,
    });
  }
}
