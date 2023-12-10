import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {

  categoryList: Post[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSomeProductFromElectronics(1)
      .subscribe(data => {
        this.categoryList = [...this.categoryList, ...data]
      })
    this.apiService.getSomeProductFromJewelery(1)
      .subscribe(data => {
        this.categoryList = [...this.categoryList, ...data]
      })
    this.apiService.getSomeProductFromMenClothing(1)
    .subscribe(data => {
      this.categoryList = [...this.categoryList, ...data]
    })
    this.apiService.getSomeProductFromWomenClothing(1)
    .subscribe(data => {
      this.categoryList = [...this.categoryList, ...data]
    })
  }


}
