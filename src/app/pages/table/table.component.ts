import { Component, Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { PluginComponent } from '../../layout/plugin/plugin.component';
import { SidenavComponent } from '../../layout/sidenav/sidenav.component';

export interface Item { id: string; name: string; description: string; price: number; stuatus: string }
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, PluginComponent, SidenavComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  firestore: Firestore = inject(Firestore)
  items: Observable<any[]>;
  constructor() {
    const aCollection = collection(this.firestore, 'items')
    this.items = collectionData(aCollection);
  }
}
