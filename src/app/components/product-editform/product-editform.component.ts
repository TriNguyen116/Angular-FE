import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/productService/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-editform',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './product-editform.component.html',
  styleUrl: './product-editform.component.css'
})
export class ProductEditformComponent implements OnInit {

  product: any;
  getId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
  }
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    status: ['', Validators.required],
  })

  ngOnInit(): void {
    this.getProductId(this.getId)
  }

  getProductId(id: any) {
    this.productService.getById(this.getId).subscribe((data) => {
      this.product = data
    })
  }

  updatePost(id: any): void {
    if (this.getId) {
      this.productService.edit(id, this.form.getRawValue()).then(() => { this.router.navigate(['../../'], { relativeTo: this.activatedRoute }) }).catch((err) => console.log(err))
    }
    console.log('click');

  }
}
