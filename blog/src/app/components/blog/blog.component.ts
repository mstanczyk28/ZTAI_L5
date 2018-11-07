import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

@Component({selector: 'blog-item'})
export class BlogItemComponent{
  @Input() title : string;
}
export class BlogComponent implements OnInit {

  items = [
    {
      image: "https://www.google.pl/imgres?imgurl=https%3A%2F%2Fdomi33311.files.wordpress.com%2F2015%2F03%2F9838_polska_mazury_jezioro_nidzkie.jpg&imgrefurl=https%3A%2F%2Fdomi33311.wordpress.com%2F2015%2F03%2F03%2Fkrajobrazy-polski-mazury%2F&docid=nbFyB6bQQN4IuM&tbnid=AYKbkBPylAwc7M%3A&vet=10ahUKEwj7j9iS8MLeAhUKKuwKHbmkA_0QMwhTKBMwEw..i&w=640&h=420&bih=695&biw=1517&q=krajobrazy%20polski&ved=0ahUKEwj7j9iS8MLeAhUKKuwKHbmkA_0QMwhTKBMwEw&iact=mrc&uact=8",
      text: "Mazury"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhiBWx3v_el-kR3koeIbX2bZ39YA5q23n9E0RsUrvmKHOo0Dd",
      text: "Kjkidjfidji"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodmda1hwNLq0qO6vC5Kw7O3TUWSgtq-t-1olVeTmplVBYoliv",
      text: "sdsdssd"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJSPE1xU7BZL2COPcGD_GQYJ37RY1Vg9DuDx9Ul8jikZ6Dm85",
      text: "adadfhrht"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oRjVqfKK_Mqj57Hvm8aIS2IIYBQHSdGPly1YxI34pQfdrAh7-Q",
      text: "rhjf"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPsSxjHYN7bf-6j5Z3ZBOXQVCI9a2N3CDSvIrHkc7d66sdELLYw",
      text: "yydbfb"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUg-P1gjkWXeSnhMWmH4Yg_ICG5sbO7ybgyX4nXALteQzw7Lb",
      text: "kjkjdih"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-rd0IHqX2wNQY6-mVGnwErd4Nw00Tg6Jr7jmuRKpk67-Xbju",
      text: "oidhfdh"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
