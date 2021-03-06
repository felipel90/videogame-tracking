import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

// firebase config
import { AngularFireModule } from 'angularfire2';
import { FirebaseConfig } from '../firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// app modules
import { BaseModule } from './pages/base/base.module';
import { HomeModule } from './pages/home/home.module';
import { CatalogModule } from './pages/catalog/catalog.module';
import { ConsolesService } from './services/consoles/consoles.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    
    // app modules
    BaseModule,
    HomeModule,
    CatalogModule,

    // firebase config
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ConsolesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
