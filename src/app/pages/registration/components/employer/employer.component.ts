import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent {
  @Input() employer:boolean;
  

  @Output() onEmployerBack = new EventEmitter();

  onSetBack(){
    this.employer = !this.employer;
    this.onEmployerBack.emit(this.employer);
  }
}
