import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import products from '../../../data/products.json';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-navigation',
  standalone: true,  // if you're using Angular standalone components
  imports: [CommonModule, FormsModule],
  templateUrl: './order-navigation.component.html',
  styleUrls: ['./order-navigation.component.scss']  // fixed plural
})
export class OrderNavigationComponent {
  searchQuery: string = '';
  filteredProducts: any[] = [];
  cart: any[] = [];

  constructor(private router: Router) {}

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = query
      ? products.filter(product => product.title.toLowerCase().includes(query))
      : [];
  }

  goToMenuWithSearch(product: any) {
    localStorage.setItem('searchProduct', JSON.stringify(product));
    this.router.navigate(['/menu']);
    this.searchQuery = '';
    this.filteredProducts = [];
  }

  goToCart() {
    this.router.navigate(['/order']);
  }

  goToCustomer() {
    this.router.navigate(['/user']);
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  }
}
