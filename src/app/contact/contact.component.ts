import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RsvpService } from 'app/rsvp.service';
import { Comment } from '../comment.model';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [RsvpService]
})
export class ContactComponent implements OnInit {

  constructor(private rsvp:RsvpService, private router: Router) { }
    submit(name:string, said:string){

      var comment = new Comment(name, said);
      this.rsvp.addComment(comment);
    }
    comments;
  ngOnInit() {
    this.comments = this.rsvp.getComment();
  }

}
