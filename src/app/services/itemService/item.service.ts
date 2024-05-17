import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  http: HttpClient = inject(HttpClient)
  constructor() { }
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8000/api/items');
  }
  insertItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:8000/api/insert', item)
  }
}
