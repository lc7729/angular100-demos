import { Component, OnInit } from '@angular/core';
import { Product } from './shared/product';

@Component({
  selector: 'app-product-list',
  template: `
    <h1>Products</h1>
    <ul>
      <li *ngFor="let product of products; let i = index; trackBy: trackByFunction">
        {{ i + 1 }}) {{ product.description }} {{ product.quantity }}
      </li>
    </ul>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productId = 3;

  ngOnInit() {
    this.products = [
      { id: 1, description: 'cups', quantity: 30 },
      { id: 2, description: 'spoons', quantity: 10000 },
      { id: 3, description: 'knives', quantity: 0 }
    ];

    const timerID = setInterval(this.addProduct, 1000);
    setTimeout(() => {
      clearInterval(timerID);
    }, 6000);
  }

  trackByFunction(index: number, product: Product): number {
    return product.id;
  }

  addProduct() {
    this.products = [
      ...this.products,
      { id: this.productId++, description: `item${this.productId}`, quantity: this.productId }
    ];
  }
}
