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
      imageUrl: 'https://via.placeholder.com/300x200?text=Wireless+Headphones',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P002',
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor and GPS',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Smart+Watch',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P003',
      name: 'Bluetooth Speaker',
      description: 'Portable waterproof speaker with deep bass',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Bluetooth+Speaker',
      inStock: false,
      category: 'Electronics'
    },
    {
      id: 'P004',
      name: 'USB-C Hub',
      description: '7-in-1 multiport adapter with HDMI and SD card reader',
      price: 34.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=USB-C+Hub',
      inStock: true,
      category: 'Electronics'
    },
    {
      id: 'P005',
      name: 'Cotton T-Shirt',
      description: 'Premium 100% organic cotton crew neck tee',
      price: 24.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Cotton+T-Shirt',
      inStock: true,
      category: 'Clothing'
    },
    {
      id: 'P006',
      name: 'Denim Jacket',
      description: 'Classic denim jacket with button front and chest pockets',
      price: 89.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Denim+Jacket',
      inStock: true,
      category: 'Clothing'
    },
    {
      id: 'P007',
      name: 'Running Shoes',
      description: 'Lightweight mesh sneakers with cushioned sole',
      price: 119.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Running+Shoes',
      inStock: false,
      category: 'Clothing'
    },
    {
      id: 'P008',
      name: 'LED Desk Lamp',
      description: 'Adjustable touch lamp with 3 brightness levels and USB port',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=LED+Desk+Lamp',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P009',
      name: 'Throw Pillow Set',
      description: 'Set of 2 decorative linen pillows with hidden zipper',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Throw+Pillow+Set',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P010',
      name: 'Coffee Maker',
      description: '12-cup programmable drip coffee maker with thermal carafe',
      price: 64.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Coffee+Maker',
      inStock: true,
      category: 'Home'
    },
    {
      id: 'P011',
      name: 'Pruning Shears',
      description: 'Sharp stainless steel bypass pruning shears with ergonomic grip',
      price: 19.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Pruning+Shears',
      inStock: true,
      category: 'Garden'
    },
    {
      id: 'P012',
      name: 'Garden Hose',
      description: '50ft expandable garden hose with spray nozzle',
      price: 44.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Garden+Hose',
      inStock: false,
      category: 'Garden'
    },
    {
      id: 'P013',
      name: 'Yoga Mat',
      description: 'Non-slip premium yoga mat with carrying strap',
      price: 32.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Yoga+Mat',
      inStock: true,
      category: 'Sports'
    },
    {
      id: 'P014',
      name: 'Resistance Bands Set',
      description: 'Set of 5 resistance bands with door anchor and carrying bag',
      price: 22.99,
      imageUrl: 'https://via.placeholder.com/300x200?text=Resistance+Bands',
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

  searchProducts(term: string): Product[] {
    if (!term || term.trim() === '') return this.products;
    const lower = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
  }
}
