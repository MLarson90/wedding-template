import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
  submit(username: string, password: string){
    if(username === "HappyCouple" && password === "Love"){
    this.router.navigate(['./admin']);
  }else{
    alert("That username and password seem to be incorrect");
  }
}
  ngOnInit() {
  }

}
