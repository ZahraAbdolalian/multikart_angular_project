import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {

  categoryList: Post[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>('https://fakestoreapi.com/products/category/electronics?limit=1')
      .subscribe(data => {
        this.categoryList = [...this.categoryList ,...data]
      })
    this.http.get<Post[]>('https://fakestoreapi.com/products/category/jewelery?limit=1').subscribe(data => {
        this.categoryList = [...this.categoryList , ...data]
    })
    this.http.get<Post[]>("https://fakestoreapi.com/products/category/men's clothing?limit=1").subscribe(data => {
        this.categoryList = [...this.categoryList , ...data]
    })
    this.http.get<Post[]>("https://fakestoreapi.com/products/category/women's clothing?limit=1").subscribe(data => {
        this.categoryList = [...this.categoryList , ...data]
    })
  }


}
