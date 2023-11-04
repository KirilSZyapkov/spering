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

  }

  logout() {
    const profile = this.localStorage.useLocalStorage({});
    this.value.next(profile);
  }
}
