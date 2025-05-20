import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured',
  imports: [ProductListComponent],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  constructor(private router: Router) {}

  routeToMenu() {
    this.router.navigate(['/menu']);
  }
}
