import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    //Slides text in the header down from top
      $('#travelTopHead').slideDown('slow');
      $( "#travelHead" ).slideDown('slow');

  }

}
