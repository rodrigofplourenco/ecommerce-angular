import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent {
  @Input() product: IProduct | undefined;

  @Output() notify = new EventEmitter();
}
