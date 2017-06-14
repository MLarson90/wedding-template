import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { RsvpService } from '../rsvp.service';
import { Display } from '../display.model';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[RsvpService]
})
export class AdminComponent implements OnInit {
  rsvp;
  wedding;
  weddingTotal = 0;
  reception;
  receptionTotal = 0;
  brunch;
  brunchTotal = 0;
  kids;
  kidTotal = 0;
  hotel;
  hotelTotal = 0;
  constructor(private Service: RsvpService) { }

  ngOnInit() {
    this.rsvp = this.Service.getGuest();
    this.wedding = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.weddingTotal += result[i].wedding;
      }
    });
    this.reception = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.receptionTotal += result[i].reception;
      }
    });
    this.brunch = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.brunchTotal += result[i].brunch;
      }
    });
    this.kids = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        if(result[i].kids!= ""){
        this.kidTotal += result[i].kids;
      }
      }
    });
    this.hotel = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        if(result[i].hotel!= ""){
        this.hotelTotal += result[i].hotel;
      }
      }
    });
  }
}
