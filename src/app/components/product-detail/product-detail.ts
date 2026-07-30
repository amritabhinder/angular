import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  protected product: Product | undefined;

  constructor() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.product = this.productService.getProductById(id);
  }

  addToCart() {
    if (this.product) {
      this.cartService.addItem(this.product);
    }
  }
}
