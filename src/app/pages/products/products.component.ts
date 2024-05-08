import { Component } from '@angular/core';
import { SidenavComponent } from '../../layout/sidenav/sidenav.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PluginComponent } from '../../layout/plugin/plugin.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductAddformComponent } from '../../components/product-addform/product-addform.component';
import { ProductEditformComponent } from '../../components/product-editform/product-editform.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SidenavComponent, NavbarComponent, FooterComponent, PluginComponent, ProductListComponent, ProductAddformComponent, ProductEditformComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
