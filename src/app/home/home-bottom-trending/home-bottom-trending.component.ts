import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-bottom-trending',
  templateUrl: './home-bottom-trending.component.html',
  styleUrls: ['./home-bottom-trending.component.scss']
})
export class HomeBottomTrendingComponent implements OnInit{
  starsArray: any[] = new Array(5);
  productsArray : Post[] = []

  constructor (private apiService : ApiService){}

  ngOnInit(): void {
      this.apiService.getSomeProducts(4)
      .subscribe(data => {
        this.productsArray = data
      })
  }
}
