import { Component, inject, Input, OnInit } from '@angular/core';
import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PluginComponent } from '../../layout/plugin/plugin.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductAddformComponent } from '../../components/product-addform/product-addform.component';
import { ProductEditformComponent } from '../../components/product-editform/product-editform.component';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { CategoryComponent } from '../../components/category/category.component';
import { CategoryProductlistComponent } from '../../components/category-productlist/category-productlist.component';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidenavComponent, NavbarComponent, FooterComponent, PluginComponent, ProductListComponent, ProductAddformComponent, ProductEditformComponent, ToastrModule, CategoryComponent, CategoryProductlistComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  fromCategoryComponent = ''

  reciveCategory(categoryNumber: string) {
    this.fromCategoryComponent = categoryNumber
    console.log('product component recive from CategoryComponent', this.fromCategoryComponent);
  }
}
