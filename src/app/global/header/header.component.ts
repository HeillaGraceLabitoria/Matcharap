import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/' },  // Use routerLink or url as needed
      { label: 'About Us', routerLink: './about' },
      { label: 'Contact Us', routerLink: './contact' },
      // { label: 'Order Now', routerLink: './order' }
    ];
  }
}
