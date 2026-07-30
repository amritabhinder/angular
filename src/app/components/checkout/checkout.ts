import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  protected readonly cartItems = this.cartService.items;
  protected readonly totalPrice = this.cartService.totalPrice;
  protected readonly totalItems = this.cartService.totalItems;

  name = '';
  email = '';
  address = '';

  placeOrder() {
    if (!this.name || !this.email || !this.address) return;
    if (this.cartItems().length === 0) return;

    this.cartService.clearCart();
    this.router.navigate(['/order-confirmation'], {
      queryParams: { name: this.name },
    });
  }
}
