import { Component, Inject, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any = [];
  productService = inject(ProductService)
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(): void {
    this.productService.getAll().subscribe((data: any[]) => {
      this.products = data
    })
  }

  deleteProduct(id: any): void {
    this.productService.delete(id).then(() => { console.log('Update item successfully1') }).catch((err) => console.log(err));
  }
}
