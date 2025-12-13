import { Component, Input } from '@angular/core';

export interface ProductItem {
  title: string;
  code: string;
  link: string;
  img: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: ProductItem[] = [];
}
