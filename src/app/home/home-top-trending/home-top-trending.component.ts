import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-home-top-trending',
  templateUrl: './home-top-trending.component.html',
  styleUrls: ['./home-top-trending.component.scss']
})
export class HomeTopTrendingComponent implements OnInit{
  starsArray: any[] = new Array(5);
  newArrivalItems :Post[] = []

  constructor (private http : HttpClient){}

  ngOnInit(): void {
      this.http.get<Post[]>('https://fakestoreapi.com/products?limit=8').subscribe(data => {
        this.newArrivalItems = data
        console.log(this.newArrivalItems);
        
      })
  }
}
