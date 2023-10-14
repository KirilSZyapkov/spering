import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  translateX: string = "translateX(1350px)";

  click(){
    this.translateX = "translateX(0px)";
    console.log("hi");
    
  }
}
