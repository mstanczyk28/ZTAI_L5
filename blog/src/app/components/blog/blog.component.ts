import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  @Input ('filterText')  filterText : string;
  // filterText : string;
  // items : any;
  constructor(/*private dataService:DataService*/) { }

  ngOnInit() {
    // this.dataService.getAll().subscribe(result=>{
    //   this.items=result;
    // });
  }


}
