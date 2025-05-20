import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import products from '../../../data/products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [ProductListComponent,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  _products = products;
  categories: string[] = [];
  selectedCategory: string = '';
  cart: any[] = [];
  constructor(private router : Router){}

  ngOnInit(): void {
    if(this._products!=null){
      const allCategories = this._products.map((product: any) => product.category);
      this.categories = Array.from(new Set(allCategories)).slice(1); // skips first
      this.selectCategory(this.categories[0]);
    }

  }

  selectCategory(category: string): void {
    console.log(this._products)
    this.selectedCategory = category;
  }

  addToCart(){
    
  }
}
