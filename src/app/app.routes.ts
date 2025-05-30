import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderComponent } from './pages/order/order.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {path:'',component:FeaturedComponent},
    {path:'customer',component:UserComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'order', component: OrderComponent},
    {path:'menu', component: MenuComponent},
];
