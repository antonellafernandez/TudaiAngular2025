import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {
  @Input() quantity!: number;
  @Input() max!: number;

  @Output() quantityChange = new EventEmitter<number>();

  constructor() {}

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = parseInt(input.value, 10);

    if (isNaN(value) || value < 0) {
      value = 0;
    } else if (value > this.max) {
      value = this.max;
    }

    this.quantity = value;
    this.quantityChange.emit(this.quantity);
  }
}
