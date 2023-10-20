import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: string;
  @Input() title: string;
  @Input() variant: string;
  @Output() btnOnClick = new EventEmitter();

  onClick(): void {
    this.btnOnClick.emit();
  }
}
