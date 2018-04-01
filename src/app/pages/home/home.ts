import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatSnackBar } from '@angular/material';
import { ConsolesService } from '../../services/consoles/consoles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomePage implements OnInit {
  gameData = {};
  consoles: any[];
  todoCollectionRef: AngularFirestoreCollection<any>;
  activeProgressBar = false;

  constructor(
    private _afs: AngularFirestore,
    public snackBar: MatSnackBar,
    private _consolesService: ConsolesService) { 
      this._consolesService.getConsoleList().subscribe((res) => {
        this.consoles = res;        
      })
    }

  ngOnInit() { }  

  public createNewGame() {
    this.activeProgressBar = true;
    return this._afs.collection('games').add(this.gameData)
      .then((res) => {
        this.gameData = {};
        this.activeProgressBar = false;
        this.snackBar.open('Game added in the catalog', 'Close', {
          duration: 5000
        })
      })
  }

}
