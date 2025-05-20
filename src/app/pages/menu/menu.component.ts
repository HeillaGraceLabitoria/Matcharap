import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import products from '../../../data/products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ProductListComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  // fixed typo here
})
export class MenuComponent {
  _products = products;
  categories: string[] = [];
  selectedCategory: string = '';
  cart: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this._products != null) {
      const allCategories = this._products.map((product: any) => product.category);
      this.categories = Array.from(new Set(allCategories)).slice(1); // skips first
      this.selectCategory(this.categories[0]);
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    console.log(this._products);
  }

  addToCart(product: any): void {
    if (product.quantity > 0) {
      // Check if product is already in the cart
      const index = this.cart.findIndex(item => item.id === product.id);
      if (index === -1) {
        this.cart.push({ ...product, quantityAdded: 1 });
      } else {
        // Optionally increase quantity in cart
        this.cart[index].quantityAdded += 1;
      }
      console.log('Cart:', this.cart);
    } else {
      console.log('Cannot add product with zero quantity');
    }
  }
}
