import { Injectable } from '@angular/core';
import { User } from 'src/interface/User';

@Injectable({
  providedIn: 'root',
})
export class UseLocalStorageService {
  constructor() {}
  public useLocalStorage(value?: User) {
    const jsonData: string | null = localStorage.getItem('user');

    if (jsonData == null) {
      localStorage.setItem('user', JSON.stringify({}));
      return null;
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify(value || JSON.parse(jsonData))
      );
      return value || JSON.parse(jsonData);
    }
  }
}
