import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { RsvpService } from '../rsvp.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[RsvpService]
})
export class AdminComponent implements OnInit {
  //place holders to store values from below functions to display on screen
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
    // display all guest names
    this.rsvp = this.Service.getGuest();
    //display number of guest attending wedding
    this.wedding = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.weddingTotal += result[i].wedding;
      }
    });
    //display number of guest attending reception
    this.reception = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.receptionTotal += result[i].reception;
      }
    });
    //display number of guest attending brunch
    this.brunch = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        this.brunchTotal += result[i].brunch;
      }
    });
    //displays number of kids attending wedding
    this.kids = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        if(result[i].kids!= ""){
        this.kidTotal += result[i].kids;
      }
      }
    });
    //displays number of guest staying at recomended hotel
    this.hotel = this.Service.getGuest().subscribe(result => {for(let i = 0; i < result.length; i++) {
        if(result[i].hotel!= ""){
        this.hotelTotal += result[i].hotel;
      }
      }
    });
  }
}
