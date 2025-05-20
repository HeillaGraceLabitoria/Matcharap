import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryFormComponent } from '../../components/delivery-form/delivery-form.component';

@Component({
  selector: 'app-order',
  imports: [CommonModule, DeliveryFormComponent],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cartItems: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const qty = item.quantity || 1;
      return total + (item.price * qty);
    }, 0);
  }

  completeOrder(): void {
    alert('Thank you for your order!');
    localStorage.removeItem('cart');
    this.cartItems = [];
  }

  increaseQuantity(index: number) {
    this.cartItems[index].quantity = (this.cartItems[index].quantity || 1) + 1;
    this.updateCartStorage();
  }

  decreaseQuantity(index: number) {
    if ((this.cartItems[index].quantity || 1) > 1) {
      this.cartItems[index].quantity -= 1;
      this.updateCartStorage();
    }
  }

  updateCartStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeItem(index: number): void {
  this.cartItems.splice(index, 1);
  // Optionally update localStorage if you save the cart there
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
}


  // New method for navigating back
  goBackToMenu() {
    this.router.navigate(['/menu']);
  }
}
