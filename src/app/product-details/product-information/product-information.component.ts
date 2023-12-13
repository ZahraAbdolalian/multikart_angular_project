import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  mediaIcons = [
    {
      name: 'fa fa-facebook',
      url: 'https://www.facebook.com/'
    },
    {
      name: 'fa fa-google-plus',
      url: 'https://plus.google.com/discover'
    },
    {
      name: 'fa fa-twitter',
      url: 'https://twitter.com/'
    },
    {
      name: 'fa fa-instagram',
      url: 'https://twitter.com/'
    }
  ]

  timer = [
    { className: 'day', amount: -861, timerCal: 'Days' },
    { className: 'hour', amount: -13, timerCal: 'Hrs' },
    { className: 'minute', amount: -2, timerCal: 'Min' },
    { className: 'second', amount: -8, timerCal: 'Sec' },
  ]

  product !: Post 

  productId = 0
  priceBeforeDiscount = 0

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.productId = params['id']
      }
    )

    this.apiService.getProductsWithId(this.productId)
      .subscribe(data => {
        this.product = data
        this.priceBeforeDiscount = (this.product.price * 100) / 40
      })
    
    
  }
}
