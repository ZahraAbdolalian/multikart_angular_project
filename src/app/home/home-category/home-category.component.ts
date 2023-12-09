import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit{
  categoryItems = [
    {
      title: 'watch model', imgUrl: '../../../assets/images/test1.png',
      content: ['D1 milano', 'damaskeening', 'diving watch', 'dollar watch']
    },
    {
      title: 'watch model', imgUrl: '../../../assets/images/test1.png',
      content: ['D1 milano', 'damaskeening', 'diving watch', 'dollar watch']
    },
    {
      title: 'watch model', imgUrl: '../../../assets/images/test1.png',
      content: ['D1 milano', 'damaskeening', 'diving watch', 'dollar watch']
    },
    {
      title: 'watch model', imgUrl: '../../../assets/images/test1.png',
      content: ['D1 milano', 'damaskeening', 'diving watch', 'dollar watch']
    },
  ]

  categoryList !: Post[]
  categoryTest !: Object

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>('https://fakestoreapi.com/products?limit=4').subscribe(data => {
      this.categoryList = data
      console.log(this.categoryList);
    })
  }

  test() {
    this.http.get<Post[]>('https://fakestoreapi.com/products?limit=4').subscribe(data => {
      this.categoryList = data
      console.log(this.categoryList);
    })
  }
}
