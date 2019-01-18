import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthenticationService, public router:Router) { }

  ngOnInit() {
  }

  // logOut() {
  //   this.authService.logout().subscribe(() => {
  //     this.router.navigate(['/home-component']);
  //   });
  // }

  logOut() {
    this.authService.logout();
  }


}
