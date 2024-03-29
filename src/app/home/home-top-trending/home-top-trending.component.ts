import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-top-trending',
  templateUrl: './home-top-trending.component.html',
  styleUrls: ['./home-top-trending.component.scss']
})
export class HomeTopTrendingComponent implements OnInit, OnDestroy{
  private apiSubscription!: Subscription;

  labels = ['NEW ARRIVAL','ON SALE','BEST SELLERS']
  starsArray: any[] = new Array(5);
  newArrivalItems !:Post[]

  constructor (
    private apiService:ApiService,
    private router : Router
    ){}

  ngOnInit(): void {
    this.apiSubscription = this.apiService.getSomeProducts(8).subscribe(data => {
      this.newArrivalItems = data
      console.log(this.newArrivalItems);
    })
  }

  onLoadProductDetails(){
    this.router.navigate(['/product-details'])
  }

  ngOnDestroy(): void {
      this.apiSubscription.unsubscribe()
  }
}
