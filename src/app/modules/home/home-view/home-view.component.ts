import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Banner } from 'src/app/shared/Interfaces/banner.interface';
import { Chronicles } from 'src/app/shared/Interfaces/chronicle.interface';
import { Product } from 'src/app/shared/Interfaces/product.interface';
import { HomeService } from '../home.service';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {
  productDetails: Product[] = [];
  bannerDetails: Banner[] = [];
  recentSellingProducts: Product[] = [];
  chronicleDetails: Chronicles[] = [];
  chronicleDataVisible: boolean = false;
  chronicleViewData: Chronicles = { imageUrl: '', content: '' };
  subscriptions: Subscription[] = [];

  constructor(private eventBusService: EventBusService, private router: Router, private homeService: HomeService, private commonService: CommonService) { }

  getHomeData() {
    const homeDataApi = this.homeService.getHomeData().subscribe(
      (data: any[]) => {
        // data[0] will contain the result of getBanner()
        // data[1] will contain the result of getOfferProducts()
        // data[2] will contain the result of getBestSellingProducts()
        // data[3] will contain the result of getChronicles()

        console.log(data);
      },
      error => {
        console.error(error);
        this.commonService.showError('Home', 'Error fetching data!');
      }
    );

    this.subscriptions.push(homeDataApi);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }


  ngOnInit() {
    this.eventBusService.on('chronicle-data-view', (data: Chronicles) => {
      console.log('chronicle emited data ', data);
      this.chronicleDataVisible = true;
      this.chronicleViewData = data;
    });

    this.getHomeData();

    //dymmy data
    this.productDetails = [{
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

    this.recentSellingProducts = [{
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
      tagContent: 'Trending',
      discount: 0,
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
    }]

    this.bannerDetails = [{
      bannerFor: 'Christmas Offer',
      imageUrl: 'assets/images/banner_1.jpg'
    },
    {
      bannerFor: 'New Year Trendings',
      imageUrl: 'assets/images/banner_2.jpg'
    },
    {
      bannerFor: 'Wedding Collections',
      imageUrl: 'assets/images/banner_3.jpg'
    }];

    this.chronicleDetails = [{
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      imageUrl: 'assets/images/banner_1.jpg'
    },
    {
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      imageUrl: 'assets/images/banner_2.jpg'
    },
    {
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      imageUrl: 'assets/images/category_3.jpg'
    },
    {
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      imageUrl: 'assets/images/category_2.jpg'
    },
    {
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      imageUrl: 'assets/images/category_1.jpg'
    }]
  }


  // Call this function when you want to navigate to the page
  navigateToProductPage(categoryId: string) {
    // Use navigate method to navigate to the page with the categoryId parameter
    this.router.navigate(['/products', categoryId]);
  }

  navigateToProductDetails(product: Product) {
    this.router.navigate(['/products/detail-view', product._id])
  }
}
