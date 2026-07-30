import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly categories = input<string[]>([]);
  readonly selectedCategory = input<string>('all');
  readonly categoryChange = output<string>();

  selectCategory(category: string) {
    this.categoryChange.emit(category);
  }
}
