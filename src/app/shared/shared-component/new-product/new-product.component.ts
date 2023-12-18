import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  newProductsArray: Post[] = []
  selectedProducts: Post[] = []
  currentSlide = 1

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSomeProducts(6)
      .subscribe(data => {
        this.newProductsArray = data
        this.selectedProducts = this.newProductsArray.slice(0, 3)
      })
  }

  paginator() {
    if (this.currentSlide == 1) {
      this.selectedProducts = this.newProductsArray.slice(3, 6)
      this.currentSlide = 2
    } else {
      this.selectedProducts = this.newProductsArray.slice(0, 3)
      this.currentSlide = 1
    }
  }
}
