import { Injectable } from '@angular/core';
import { Rsvp } from './rsvp.model';
import { Display } from './display.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RsvpService {
  rsvp: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase, af: AngularFireDatabase) {
    this.rsvp = database.list('guests');
  }
  getGuest(){
    return this.rsvp;
  }


  addGuest(newguest: Rsvp){
    this.rsvp.push(newguest);
  }

}
