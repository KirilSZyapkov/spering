import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/context/user-context.service';
import { User } from 'src/interface/User';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent implements OnInit {
  myProfile: User | null;

  constructor(private useContext: UserContextService) {}

  ngOnInit(): void {
    this.useContext.value.subscribe((acc) => (this.myProfile = acc));
    console.log(this.myProfile);
    
  }
}
