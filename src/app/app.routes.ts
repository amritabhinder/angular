import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cart', component: Cart },
];
