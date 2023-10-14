import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  translateX: string = "translateX(1350px)";
  isOpen:boolean = true;
  isClose:boolean = false;

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
