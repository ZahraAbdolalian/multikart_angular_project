import { Component } from '@angular/core';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-collection-filter',
  templateUrl: './collection-filter.component.html',
  styleUrls: ['./collection-filter.component.scss']
})
export class CollectionFilterComponent {
  categoryArray = [
    'fashion', 'shoes', 'bags', 'watch',
    'flower', 'pets', 'electronics',
    'vegetables', 'furniture', 'beauty', 
    'tools', 'gym', 'marijuana'
  ]

  isCategoryListOpen = true;

  toggleCategoryList() {
    this.isCategoryListOpen = !this.isCategoryListOpen;
  }
}
