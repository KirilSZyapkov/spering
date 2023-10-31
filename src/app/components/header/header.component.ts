import { Component } from '@angular/core';
import { UserContextService } from 'src/app/context/user-context.service';
import { UseLocalStorageService } from 'src/app/service/use-local-storage.service';
import { User } from 'src/interface/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  translateX: string = "translateX(1350px)";
  isOpen:boolean = true;
  isClose:boolean = false;
  profile: User;

  constructor(private userContext: UserContextService, private useLocalStorage: UseLocalStorageService){
    this.userContext.value.subscribe(value => this.profile = value);
  }

  logout():void{
    this.userContext.logout();
  }

  showLinks(){
    this.translateX = "translateX(0px)";
    this.isOpen = false;
    this.isClose = true;
  }

  hideLinks(){
    this.translateX = "translateX(1350px)";
    this.isOpen = true;
    this.isClose = false;
  }
}
