import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/productService/product.service';
@Component({
  selector: 'app-product-addform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-addform.component.html',
  styleUrl: './product-addform.component.css'
})
export class ProductAddformComponent {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService)
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
    category: ['', Validators.required],

  })

  addProductForm(): any {
    console.log(this.form.getRawValue());
    this.productService.add(this.form.getRawValue()).finally(() => { this.router.navigate(['./'], { relativeTo: this.activatedRoute }) })

  }

}
