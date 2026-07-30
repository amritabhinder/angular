import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product';
import { SearchState } from '../../services/search-state';
import { Sidebar } from '../sidebar/sidebar';
import { ProductGrid } from '../product-grid/product-grid';

@Component({
  selector: 'app-home',
  imports: [Sidebar, ProductGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productService = new ProductService();
  protected readonly searchState = inject(SearchState);

  protected readonly categories = signal<string[]>(this.productService.getCategories());
  protected readonly selectedCategory = signal<string>('all');

  protected readonly filteredProducts = computed(() => {
    let products = this.productService.getProducts();

    const cat = this.selectedCategory();
    if (cat && cat !== 'all') {
      products = products.filter(p => p.category === cat);
    }

    const term = this.searchState.searchTerm().toLowerCase().trim();
    if (term) {
      products = products.filter(
        p =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    return products;
  });

  onCategoryChange(category: string) {
    this.selectedCategory.set(category);
  }
}
