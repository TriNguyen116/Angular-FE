import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDoc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/items';
  constructor(private firestore: Firestore) { }
  getAll(): Observable<any> {
    return collectionData(collection(this.firestore, this.dbPath))
  }

  getCategoryProduct(categoryValue: string): Observable<any> {
    return new Observable((observer) => {
      const q = query(collection(this.firestore, this.dbPath), where('category', '==', categoryValue.toString()))
      const dataArray: any[] = [];
      getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dataArray.push({ id: doc.id, ...doc.data() })
        });
        observer.next(dataArray)
        observer.complete();
      }).catch((error) => {
        observer.error(error)
      })

    })

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
