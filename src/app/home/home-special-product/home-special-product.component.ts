import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-special-product',
  templateUrl: './home-special-product.component.html',
  styleUrls: ['./home-special-product.component.scss']
})
export class HomeSpecialProductComponent implements OnInit, OnDestroy{
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  productsArray !: Post[]

  constructor (private apiService : ApiService){}

  ngOnInit(): void {
      this.apiSubscription = this.apiService.getSomeProducts(5)
      .subscribe(data => {
        this.productsArray = data
        console.log(data);
      })
  }

  ngOnDestroy(): void {
   this.apiSubscription.unsubscribe()   
  }
}
