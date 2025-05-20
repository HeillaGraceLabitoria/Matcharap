import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryFormComponent } from '../../components/delivery-form/delivery-form.component';
import { OrderSummaryComponent } from '../../components/order-summary/order-summary.component';

@Component({
  selector: 'app-order',
  imports: [CommonModule, DeliveryFormComponent, OrderSummaryComponent],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  cartItems: any[] = [];
  showSummaryModal = false;
  deliveryInfo: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const storedCart = localStorage.getItem('cart');
    this.cartItems = storedCart ? JSON.parse(storedCart) : [];
    this.deliveryInfo = JSON.parse(localStorage.getItem('deliveryForm') || '{}');
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      const qty = item.quantity || 1;
      return total + (item.price * qty);
    }, 0);
  }

  completeOrder(): void {
    this.showSummaryModal = true;
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    this.deliveryInfo = JSON.parse(localStorage.getItem('deliveryForm') || '{}');
  }

  
  closeModal(): void {
    this.showSummaryModal = false;
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
