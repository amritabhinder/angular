import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 'P001',
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones with 30-hour battery life',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P002',
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor and GPS',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P003',
      name: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with deep bass',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
      inStock: false,
      category: 'Electronics'
    },
    {
      id: 'P004',
      name: 'USB-C Hub',
      description: '7-in-1 multiport adapter with HDMI and SD card reader',
      price: 34.99,
      imageUrl: 'https://images.unsplash.com/photo-1625723044790-3b5c3e5c8b7a?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P005',
      name: 'Cotton T-Shirt',
      description: 'Premium 100% organic cotton crew neck tee',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Clothing'
    },
    {
      id: 'P006',
      name: 'Denim Jacket',
      description: 'Classic denim jacket with button front and chest pockets',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Clothing'
    },
    {
      id: 'P007',
      name: 'Running Shoes',
      description: 'Lightweight mesh sneakers with cushioned sole',
      price: 119.99,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      inStock: false,
      category: 'Clothing'
    },
    {
      id: 'P008',
      name: 'LED Desk Lamp',
      description: 'Adjustable touch lamp with 3 brightness levels and USB port',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P009',
      name: 'Throw Pillow Set',
      description: 'Set of 2 decorative linen pillows with hidden zipper',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P010',
      name: 'Coffee Maker',
      description: '12-cup programmable drip coffee maker with thermal carafe',
      price: 64.99,
      imageUrl: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P011',
      name: 'Pruning Shears',
      description: 'Sharp stainless steel bypass pruning shears with ergonomic grip',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1592982537447-6f2a6a3c7a3b?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Garden'
    },
    {
      id: 'P012',
      name: 'Garden Hose',
      description: '50ft expandable garden hose with spray nozzle',
      price: 44.99,
      imageUrl: 'https://images.unsplash.com/photo-1589923188900-85aefc3a10d3?w=400&h=300&fit=crop',
      inStock: false,
      category: 'Garden'
    },
    {
      id: 'P013',
      name: 'Yoga Mat',
      description: 'Non-slip premium yoga mat with carrying strap',
      price: 32.99,
      imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Sports'
    },
    {
      id: 'P014',
      name: 'Resistance Bands Set',
      description: 'Set of 5 resistance bands with door anchor and carrying bag',
      price: 22.99,
      imageUrl: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop',
      inStock: true,
      category: 'Sports'
    }
  ];

  getCategories(): string[] {
    const cats = new Set(this.products.map(p => p.category));
    return Array.from(cats).sort();
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    if (!category || category === 'all') return this.products;
    return this.products.filter(p => p.category === category);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(term: string): Product[] {
    if (!term || term.trim() === '') return this.products;
    const lower = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
  }
}
