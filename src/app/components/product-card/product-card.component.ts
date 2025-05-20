import { Component, input, model, OnDestroy, OnInit, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CardModule, ButtonModule, InputTextModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{
  product = input<any>();
  showPrice = input<boolean>(false);
  quantity = model<number>(0);
  showQuantityToOrder = input<boolean>(false);


  ngOnInit(): void {
    console.log("jeelo");
  }

  increment() {
    this.product().quantity++;
  }

  decrement() {
    this.product().quantity == 0? 0 : --this.product().quantity;
  }
}
