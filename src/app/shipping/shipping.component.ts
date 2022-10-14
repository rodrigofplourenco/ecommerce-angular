import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService, IShippingPrice } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<IShippingPrice[]>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
