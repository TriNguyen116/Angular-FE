import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ProductService } from '../../services/productService/product.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Output() categoryNumber = new EventEmitter<string>();
  categoryValue = ''
  productService = inject(ProductService)
  productsCategory: any[] = []
  selectCategory(categoryValue: any) {
    this.categoryNumber.emit(categoryValue)
  }
  getCategoryProduct(categoryValue: any): void {
    this.productService.getCategoryProduct(categoryValue).subscribe((data: any[] = []) => {
      this.productsCategory = data
      console.log(this.productsCategory);

    })
  }
}
