import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-filter',
  templateUrl: './collection-filter.component.html',
  styleUrls: ['./collection-filter.component.scss']
})
export class CollectionFilterComponent {
  categoryArray = [
    'electronics', 'jewelery', "men's clothing", "women's clothing"
  ]

  isCategoryListOpen = true;

  toggleCategoryList() {
    this.isCategoryListOpen = !this.isCategoryListOpen;
  }
}
