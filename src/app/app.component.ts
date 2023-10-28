import { Component } from '@angular/core';
import { UseLocalStorageService } from './service/use-local-storage.service';
import { User } from 'src/interface/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hiering';
  user: User;

  constructor(private localStorage: UseLocalStorageService) {}

  ngOnInit(): void {
    this.user = this.localStorage.useLocalStorage();
    console.log(this.user);
    
  }
}
