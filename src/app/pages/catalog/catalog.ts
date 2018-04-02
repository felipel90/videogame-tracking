import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

export interface GameDetails {
  title: string;
  year: string;
  console: string;
  completed: boolean;
  date_of_completion: number;
  notes: string;
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.scss']
})

export class CatalogPage implements OnInit {
  gamesList: any;
  currentYear: any;
  queryFilter: any;

  constructor(private _db: AngularFirestore) {
    this.currentYear = (new Date()).getFullYear();    
    this._db.collection<GameDetails>('games').valueChanges().subscribe((res) => {
      this.gamesList = res;      
    });
  }

  ngOnInit() { }

}
