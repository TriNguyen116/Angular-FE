import { Component, Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface Item { id: string; name: string; description: string; price: number; stuatus: string }
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
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
