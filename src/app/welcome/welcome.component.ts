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

    $("h1").click(function(event){
      alert("test");
    });
  }

}
