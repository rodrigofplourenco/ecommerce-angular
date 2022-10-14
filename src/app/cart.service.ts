import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from './products';

export interface IShippingPrice {
  type: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: IProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];

    return this.items;
  }

  getShippingPrices() {
    return this.http.get<IShippingPrice[]>('/assets/shipping.json');
  }
}
