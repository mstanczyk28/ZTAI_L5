import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  post = {
    title: '',
    url: '',
    content: '',
  }

  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit() {
  }

  createPost(post){
    this.dataService.createNewOrUpdate(post).subscribe( result => {
      this.router.navigate(['/blog']);
    })
  }

  submit(){
    this.createPost(this.post);
  }

}
