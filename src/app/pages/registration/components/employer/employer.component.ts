import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  employerForm = new FormGroup({
    companyName: new FormControl(''),
    idNumber: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    age: new FormControl(''),
    termOfUse: new FormControl(''),
    personalData: new FormControl(''),
  });
  @Input() employer:boolean;
  

  @Output() onEmployerBack = new EventEmitter();

  onSetBack(){
    this.employer = !this.employer;
    this.onEmployerBack.emit(this.employer);
  }

  onRegistrate(): void {

  }
}
