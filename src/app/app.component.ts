import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BannerComponent } from './global/banner/banner.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { OrderNavigationComponent } from './global/order-navigation/order-navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent, HeaderComponent, FooterComponent, OrderNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heillabs-matcharap';
}
