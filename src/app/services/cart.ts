import { Injectable, computed, signal } from '@angular/core';
import { CartItem, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly items = signal<CartItem[]>([]);

  readonly totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  addItem(product: Product, quantity = 1) {
    this.items.update(current => {
      const existing = current.find(item => item.product.id === product.id);
      if (existing) {
        return current.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { product, quantity }];
    });
  }

  removeItem(productId: string) {
    this.items.update(current => current.filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    this.items.update(current =>
      current.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  clearCart() {
    this.items.set([]);
  }
}
