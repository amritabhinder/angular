import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { OrderConfirmation } from './components/order-confirmation/order-confirmation';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/all', component: Home },
  { path: 'products', redirectTo: '/products/all', pathMatch: 'full' },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'order-confirmation', component: OrderConfirmation },
  { path: 'product/:id', component: ProductDetail },
];
