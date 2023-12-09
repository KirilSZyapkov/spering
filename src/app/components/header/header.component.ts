import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/context/user-context.service';
import { User } from 'src/interface/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  translateX: string = 'translateX(1350px)';
  display: string = 'none';
  isOpen: boolean = true;
  profile: User | null = null;

  constructor(private userContext: UserContextService) {}

  ngOnInit(): void {
    this.userContext.value.subscribe((value) => (this.profile = value));
  }

  logout(): void {
    this.userContext.logout();
  }

  showLinks() {
    this.translateX = 'translateX(0px)';
    this.display = 'block';
    this.isOpen = false;
  }

  hideLinks() {
    this.translateX = 'translateX(1350px)';
    this.display = 'none';
    this.isOpen = true;
  }
}
