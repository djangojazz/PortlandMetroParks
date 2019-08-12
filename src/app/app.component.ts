import { Component, OnInit } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';
import { Observable } from 'rxjs';
import { ParksService } from './services/parks.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Park } from './models/park/park';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'PortlandMetroParks';
  public parks: Observable<any[]>;

  constructor(public db: AngularFirestore, private parksService: ParksService)  {
  }

  ngOnInit() {
    this.db.collection('parks').valueChanges().subscribe(console.log);
    //this.parksService.getParks().subscribe(x => this.parks = x);
  }
}
