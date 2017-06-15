import { Injectable } from '@angular/core';
import { Rsvp } from './rsvp.model';
import { Comment } from './comment.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RsvpService {
  rsvp: FirebaseListObservable<any[]>;
  comment: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase, af: AngularFireDatabase) {
    this.rsvp = database.list('guests');
    this.comment = database.list('comments');
  }
  getGuest(){
    return this.rsvp;
  }

  addGuest(newguest: Rsvp){
    this.rsvp.push(newguest);
  }
  getComment(){
    return this.comment;
  }
  addComment(newcomment: Comment){
    this.comment.push(newcomment);
  }
}
