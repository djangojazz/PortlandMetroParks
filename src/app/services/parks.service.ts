import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Park } from '../models/park/park';

@Injectable({
  providedIn: 'root'
})
export class ParksService {
  public parks: Observable<Park[]>;

constructor(private db: AngularFirestore) { }

  getParks = (): Observable<Park[]> => <Observable<Park[]>>this.db.collection('/parks').valueChanges();
}