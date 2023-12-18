import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  starsArray: any[] = new Array(5);
  relatedProducts !: Post[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSomeProducts(6)
      .subscribe(data => {
        this.relatedProducts = data
      })
  }
}
