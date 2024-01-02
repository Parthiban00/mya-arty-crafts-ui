import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  ratingValue: number = 4;
  productDetils: any = [];

  constructor(private webService: WebService, private commonService: CommonService) { }

  ngOnInit() {
    this.productDetils = [{
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg'
    },
    {
      name: 'Product Name',
      tag: false,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg'
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg'
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
    }]
  }

  ngOnDestroy() {}
}
