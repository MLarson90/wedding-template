import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Fades in top div
    $('.topSide').fadeIn(2500);
    // Fades in second div when user scrolls past specified point
    $(window).scroll( function(){
        $('.middleSide').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object -300){
              $(this).animate({'opacity':'1'},2000);
          }
        });
      });
      // Fades in third div when user scrolls past specified point
          $(window).scroll( function(){
        $('.bottomSide').each(function(i){
          var top_of_object = $(this).offset().top;
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > top_of_object + 100){
              $(this).animate({'opacity':'1'},2000);
            }
        });
      });

}
}
