import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-navigation',
  standalone: true,  // if you're using Angular standalone components
  imports: [CommonModule],
  templateUrl: './order-navigation.component.html',
  styleUrls: ['./order-navigation.component.scss']  // fixed plural
})
export class OrderNavigationComponent {
  @Input() cart: any[] = [];  // receive cart as input

  constructor(private router: Router) {}
  getCartCount(): number {
    return this.cart.reduce((total, item) => total + (item.quantityAdded || 1), 0);
  }

  goToCustomer() {
    this.router.navigate(['/customer']);
  }
  goToCart() {
    this.router.navigate(['/order']);
  }
}
