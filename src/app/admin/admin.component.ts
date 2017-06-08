import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[RsvpService]
})
export class AdminComponent implements OnInit {
  rsvp: FirebaseListObservable<any[]>;
  constructor(private Service: RsvpService) { }

  ngOnInit() {
    this.rsvp = this.Service.getGuest();
  }

}
