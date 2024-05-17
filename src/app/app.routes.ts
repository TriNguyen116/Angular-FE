import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductEditformComponent } from './components/product-editform/product-editform.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/edit/:id', component: ProductEditformComponent },
  { path: 'categories', component: CategoriesComponent }
];
