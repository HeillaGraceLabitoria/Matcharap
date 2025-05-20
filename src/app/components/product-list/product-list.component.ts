import { CommonModule } from '@angular/common';
import { Component, input, model, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import axios from 'axios';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from "../product-card/product-card.component";
import products from '../../../data/products.json';

@Component({
  selector: 'app-product-list',
  imports: [CardModule, CommonModule, ButtonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit, OnChanges {

  private _products: any = null;
  filteredProducts: any[] = [];
  category = input<string>("");
  showPrice = input<boolean>(false);
  modelProducts = model<any[]>();
  showOrderQuantity = input<boolean>(false);

  ngOnInit(): void {
    if (this.modelProducts() != null) {
      this._products = this.modelProducts();
    }
    else {
      this._products = products;
    }
          this.applyFilter();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["category"]) {
      if (this._products != null)
        this.applyFilter();
    }
  }

  applyFilter() {
    if (!this.category || this.category().trim() === '') {
      this.filteredProducts = this._products;
    } else {
      this.filteredProducts = this._products.filter((product: any) =>
        product.category.toLowerCase() === this.category().toLowerCase()
      );
    }
  }
}
