import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})

export class HomePage implements OnInit {
  gameData = {};
  todoCollectionRef: AngularFirestoreCollection<any>;
  activeProgressBar = false;

  constructor(
    private afs: AngularFirestore,
    public snackBar: MatSnackBar) { }

  ngOnInit() { }

  consoles = [
    { value: 'Ps1' },
    { value: 'Ps2' },
    { value: 'Ps3' },
    { value: 'Nitendo' }
  ];

  public createNewGame() {
    this.activeProgressBar = true;
    return this.afs.collection('games').add(this.gameData)
      .then((res) => {
        this.gameData = {};
        this.activeProgressBar = false;
        this.snackBar.open('Game added in the catalog', 'Close', {
          duration: 5000
        })
      })
  }

}
