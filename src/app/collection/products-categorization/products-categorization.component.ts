import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products-categorization',
  templateUrl: './products-categorization.component.html',
  styleUrls: ['./products-categorization.component.scss']
})
export class ProductsCategorizationComponent implements OnInit {

  starsArray: any[] = new Array(5);
  productCategory = ''

  displayedColumns: string[] = ['image', 'title', 'price', 'rating'];
  dataSource = new MatTableDataSource<Post>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.productCategory = params['category']

        this.apiService.getAllProductsInCategory(this.productCategory).subscribe((data) => {
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    )
  }
}