import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  submit(first:string,last:string,datefirst:string,datelast:string,numberOfKids:number,reception:string,brunch:string,hotel:string){
    console.log(first);
    console.log(last);
    console.log(datefirst);
    console.log(datelast);
    console.log(numberOfKids);
    console.log(reception);
    console.log(brunch);
    console.log(hotel);
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
