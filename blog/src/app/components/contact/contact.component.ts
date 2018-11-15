import {Component, NgModule, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})
