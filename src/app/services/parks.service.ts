import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ParksService {

constructor() { }
  getParks() {
    //return this.firestore.collection("parks").snapshotChanges();
  }
}
