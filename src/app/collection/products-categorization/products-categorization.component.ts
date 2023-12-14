import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Post } from 'src/app/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products-categorization',
  templateUrl: './products-categorization.component.html',
  styleUrls: ['./products-categorization.component.scss']
})
export class ProductsCategorizationComponent implements OnInit,AfterViewInit {

  productsList !: Post[]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllProducts()
      .subscribe(data => {
        this.productsList = data
        this.dataSource.data = data
        console.log(this.dataSource.data);
        
        this.dataSource.paginator = this.paginator
      })
    }
    
    ngAfterViewInit(): void {
  }
}
