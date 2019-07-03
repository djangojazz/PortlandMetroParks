import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortlandMetroParks';
  items: Observable<any[]>;

  constructor(public app: FirebaseApp) {
    
  }
}
