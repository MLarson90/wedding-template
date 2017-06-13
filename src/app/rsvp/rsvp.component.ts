import { Component, OnInit } from '@angular/core';
import { Rsvp } from '../rsvp.model';

declare var $:any;
@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  submit(first:string,last:string,datefirst:string,datelast:string,numberOfKids:number,reception:string,brunch:string,hotel:string){
    //calculate how many adults are coming (1 or 2)
    var date = function(datefirst){
      if(datefirst){
        return 2;
      }else{
        return 1;
      }
    }
    //calculate number of children attending
    var kids = function(numberOfKids){
      if(numberOfKids){
        return parseInt(numberOfKids);
      }else{
        return 0;
      }
    }
    //adult and total party totals
    var adults = date(datefirst);
    var party = adults + kids(numberOfKids);
    //how many attending each event
    var comingToEvent = function(coming, party){
      var reception = 0;
      if(coming === 'true'){
        reception += party;
      }
      return reception;
      }
    //event totals
    var receptionNumber = comingToEvent(reception, party);
    var brunchNumber = comingToEvent(brunch, party);
    var hotelNumber = comingToEvent(hotel, party);

    var totalsForDb = new Rsvp(first,last, datefirst, datelast, numberOfKids, party, receptionNumber, brunchNumber, hotelNumber);
    console.log(totalsForDb);
  }
  constructor() { }

  ngOnInit() {
  //RSVP form functions
$('#plus').click(function(event){
  event.preventDefault();
  $('#plusOne').fadeIn(1000);
  $('#plus').fadeOut(1000);
});
$('#kids').click(function(event){
  event.preventDefault();
  $('#amountOfKids').fadeIn(1000);
  $('#kids').fadeOut(1000);
});
  }

}
