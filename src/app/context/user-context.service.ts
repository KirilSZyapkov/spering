import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UseLocalStorageService } from '../service/use-local-storage.service';
import { User } from 'src/interface/User';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor(private localStorage: UseLocalStorageService) {}
  value = new BehaviorSubject<User>(this.localStorage.useLocalStorage());
  user = this.value.value || {};

  loading() {}

  registration() {}
}
