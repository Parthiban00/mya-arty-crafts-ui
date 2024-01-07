import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { WebService } from 'src/app/services/web.service';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { Category, Product } from 'src/app/shared/Interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  private subscriptions: Subscription[] = [];
  ratingValue: number = 4;
  productDetils: Product[] = [];
  sidebarVisible: boolean = false;
  categoryId: string = '';
  dividerTitle: string = 'All Products';
  totalRecords: number = 120;
  rangeValues: number[] = [20, 80];
  first: number = 0;
  rows: number = 25;

  selectedCategory!: Category | any;
  categories: Category[] = [
    { name: 'Category 1', _id: 'c1' },
    { name: 'Category 2', _id: 'c2' },
    { name: 'Category 3', _id: 'c3' },
  ];

  selectedFilters: any[] = [];
  filterOptions: any[] = [
    { name: 'Price Low to High', key: 'p-low-high' },
    { name: 'Price High to Low', key: 'p-high-low' },
    { name: 'Rating above 4', key: 'r-above-4' }
  ];

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute, private productService: ProductService, private router:Router) {

    // Subscribe to the route parameter changes
    const routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.categoryId = params['categoryId'];

      if (this.categoryId) {
        //to get specific category products
        this.selectedCategory = this.findCategory();
        this.dividerTitle = this.selectedCategory.name;

        this.getData();
      } else {
        //to get all products
        this.dividerTitle = 'All Products';
        this.getData();
      }
    });

    this.subscriptions.push(routeSubscription);
  }

  findCategory() {
    return this.categories.find((item: any) => item._id === this.categoryId);
  }

  getData() {
    //dymmy data
    this.productDetils = [{
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    },
    {
      name: 'Product Name',
      tag: false,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'SALE 30%',
      discount: 30,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg',
      _id: '1',
      quantity: 0,
      categoryId: '1',
      description: `  It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.`,
      prices: [{
        size: '2x4',
        price: 200.00
      }]
    }];

    // const reqData = {
    //   pagination: { first: this.first, rows: this.rows },
    //   filter: { category: this.categoryId, otherFilters: this.selectedFilters }
    // }

    // const getDataApi = this.productService.getData(reqData).subscribe({
    //   next: resData => {
    //     if (resData.status) {

    //       this.totalRecords = resData.totalRecords;
    //       this.productDetils = resData.data;

    //     } else {

    //     }
    //   },
    //   error: err => {

    //   },
    //   complete() {

    //   },
    // })

    // this.subscriptions.push(getDataApi);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getData();
  }

  onCheckboxChange(ev: any) {
    this.selectedFilters = ev;
    this.getData();
  }

  onDropdownChange(ev: any) {
    this.categoryId = ev._id;
    this.getData();
  }

  
  navigateToProductDetails(product: Product) {
    this.router.navigate(['/products/detail-view', product._id])
  }
}
