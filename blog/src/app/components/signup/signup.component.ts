import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {
    name: '',
    email: '',
    password: '',
  };

  constructor(public authService:AuthServiceService) { }

    ngOnInit() {
  }
    create() {
      // if (!this.credentials.avatar) {
      //   delete this.credentials.avatar;
      // }
      return this.authService.createOrUpdate(this.credentials).subscribe((result) => {
        return result;
      });
    }

}
