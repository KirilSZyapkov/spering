import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UseLocalStorageService } from '../service/use-local-storage.service';
import { User } from 'src/interface/User';
import { USERS } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor(private localStorage: UseLocalStorageService) {}
  value = new BehaviorSubject<User>(this.localStorage.useLocalStorage());
  user = this.value.value;

  loading({ email, password }) {
    if (email.value === '' || password.value === '') {
      throw new Error('All fields are requered!');
    }
    const profile = USERS.find((u) => {
      if (
        u.email === email.value &&
        Number(u.password) === Number(password.value)
      ) {
        return u;
      }
    });
    if (profile) {
      this.localStorage.useLocalStorage(profile);
      this.value.next(profile);
    } else {
      throw new Error('Invalid data!');
    }
  }

  registration(newUser: User): void {
    if (
      newUser.email === '' ||
      newUser.firstName === '' ||
      newUser.lastName === '' ||
      newUser.password === ''
    ) {
      throw new Error('All fields are requered!');
    } else if (newUser.password !== newUser.rePassword) {
      throw new Error("Passwords don't match!");
    } else {
      const isExisting = USERS.find((u) => u.email === newUser.email);

      if (isExisting !== undefined) {
        throw new Error('User already exist!');
      } else {
        USERS.push(newUser);
        this.localStorage.useLocalStorage(newUser);
        this.value.next(newUser);
      }
    }
  }

  logout() {
    const profile = this.localStorage.useLocalStorage({});
    this.value.next(profile);
  }
}
