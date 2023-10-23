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

  styles: any = {};

  ngOnInit(): void {
    const cssClass = this.variant.split(';').map((e) => {
      const [key, value] = e.split(':');
      return Object.assign({}, { [key.trim()]: value.trim() });
    });

    cssClass?.map((e) => Object.assign(this.styles, e));
    
    
  }

  onClick(): void {
    this.btnOnClick.emit();
  }
}
