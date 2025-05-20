import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cartItems: any[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const qty = item.quantity || item.quantityAdded || 1;
      return total + (item.price * qty);
    }, 0);
  }

  increaseQuantity(index: number): void {
    this.cartItems[index].quantity = (this.cartItems[index].quantity || 1) + 1;
    this.updateCartStorage();
  }

  decreaseQuantity(index: number): void {
    if ((this.cartItems[index].quantity || 1) > 1) {
      this.cartItems[index].quantity -= 1;
      this.updateCartStorage();
    }
  }

  updateCartStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  completeOrder(): void {
    alert('Thank you for your order!');
    localStorage.removeItem('cart');
    this.cartItems = [];
  }
}
