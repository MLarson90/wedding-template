import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../rsvp.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [RsvpService]
})
export class DeleteComponent implements OnInit {

  constructor(private service: RsvpService) { }
  comments;
  ngOnInit() {
    this.comments = this.service.getComment();
  }
  beginDeleteingComment(commentToDelete){
    if(confirm("Are you sure you want to delete this comment")){
      this.service.deleteComment(commentToDelete);
    }
  }
}
