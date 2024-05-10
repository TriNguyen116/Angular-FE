import { Component, EventEmitter, Inject, Input, OnInit, Output, inject, input } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-productlist',
  standalone: true,
  imports: [CommonModule, RouterLink, ToastrModule],
  templateUrl: './category-productlist.component.html',
  styleUrl: './category-productlist.component.css'
})
export class CategoryProductlistComponent {
  products: any = [];

  productsCategory: any[] = [];
  productService = inject(ProductService)
  @Input() categoryFromProductComponent = ''
  ngOnInit(): void {
    this.getProducts()
    this.getCategoryProduct()
  }


  getCategoryProduct(): void {
    this.productService.getCategoryProduct(this.categoryFromProductComponent).subscribe((data: any[] = []) => {
      this.productsCategory = data
      console.log(this.productsCategory);

    })
  }
  getProducts(): void {
    this.productService.getAll().subscribe((data: any[]) => {
      this.products = data
      console.log(this.products);

    })
  }

  deleteProduct(id: any): void {
    this.productService.delete(id).then(() => { console.log('Update item successfully1') }).catch((err) => console.log(err));
  }
}
