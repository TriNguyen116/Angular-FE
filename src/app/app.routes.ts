import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent }
];
