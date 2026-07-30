import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  imports: [RouterLink],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css',
})
export class OrderConfirmation {
  protected name = '';

  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe(params => {
      this.name = params['name'] || 'Customer';
    });
  }
}
