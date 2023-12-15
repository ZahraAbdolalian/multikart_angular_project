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
  categoryNameList: string[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCategoriesName()
      .subscribe(data => {
        this.categoryNameList = data

        for (let index = 0; index < this.categoryNameList.length; index++) {
          this.apiService.getSomeProductInCategory(1, this.categoryNameList[index])
            .subscribe(data => {
              this.categoryList = [...this.categoryList, ...data]
            })
        }
      })
  }
}
