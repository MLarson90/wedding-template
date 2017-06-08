import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // Fades in text
    $('#first').fadeIn(1000);
    $('#second').fadeIn(3000);
    $('#third').fadeIn(3500);
    $("h1").click(function(event){
      alert("test");
    });
  }

}
