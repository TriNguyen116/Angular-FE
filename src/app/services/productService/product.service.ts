import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/items';
  constructor(private firestore: Firestore) { }
  getAll(): Observable<any> {
    return collectionData(collection(this.firestore, this.dbPath))
  }
  getById(id: any): Observable<any> {
    return docData(doc(this.firestore, this.dbPath + '/' + id))
  }
  async add(data: any) {
    console.log('data', data);
    await addDoc(collection(this.firestore, this.dbPath), data).then((ref: any) => {
      setDoc(ref, { ...data, id: ref.id });
      return ref;
    })
  }

  async edit(id: any, data: any) {
    await updateDoc(doc(this.firestore, this.dbPath + '/' + id), data);
  }

  async delete(id: any) {
    await deleteDoc(doc(this.firestore, this.dbPath + '/' + id));
  }


}
