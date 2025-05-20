import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent implements OnInit {
  @Input() cartItems: any[] = [];

  deliveryInfo: {
    name: string;
    address: string;
    contact: string;
    paymentMethod: string;
  } = {
    name: '',
    address: '',
    contact: '',
    paymentMethod: ''
  };

  ngOnInit(): void {
    const stored = localStorage.getItem('deliveryInfo');
    if (stored) {
      this.deliveryInfo = JSON.parse(stored);
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const quantity = item.quantity || 1;
      return total + item.price * quantity;
    }, 0);
  }
}
