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
export class ProductsCategorizationComponent implements OnInit {

  numOfStars = 5
  starsArray: any[] = new Array(this.numOfStars);
  
  displayedColumns: string[] = ['image', 'title', 'price', 'rating'];
  dataSource = new MatTableDataSource<Post>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}