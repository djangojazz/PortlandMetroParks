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
  parks: Park[];

  constructor(private parksService: ParksService)  {
  }

  ngOnInit() {
    this.parksService.getParks().subscribe(x => this.parks = x);
  }
}
