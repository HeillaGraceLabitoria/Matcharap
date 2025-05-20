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
})export class MenuComponent {
  _products = products;
  categories: string[] = [];
  selectedCategory: string = '';
  cart: any[] = [];

  showToast = false;       // for toast visibility
  addMessage = '';  // message to show below button

  constructor(private router: Router) { }

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

  goToOrder(): void {
    this.router.navigate(['/order']);
  }

  addToCart(): void {
    const availableProducts = this._products.filter(product => product.quantity > 0);

    for (const product of availableProducts) {
      const index = this.cart.findIndex(item => item.id === product.id);

      if (index === -1) {
        this.cart.push({ ...product, quantity: product.quantity });
      } else {
        this.cart[index].quantity += product.quantity;
      }
      product.quantity = 0;
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.showAddMessage('Items added to cart!');
  }

  showAddMessage(msg: string) {
    this.addMessage = msg;

    setTimeout(() => {
      this.addMessage = '';
    }, 3000);  // message disappears after 3 seconds
  }
}
