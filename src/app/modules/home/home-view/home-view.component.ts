import { Component } from '@angular/core';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Banner } from 'src/app/shared/Interfaces/banner.interface';
import { Chronicles } from 'src/app/shared/Interfaces/chronicle.interface';
import { Product } from 'src/app/shared/Interfaces/product.interface';

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
  chronicleViewData : Chronicles = {imageUrl:'',content:''};

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {


    this.eventBusService.on('chronicle-data-view', (data: Chronicles) => {
      console.log('chronicle emited data ', data);
      this.chronicleDataVisible = true;
      this.chronicleViewData = data;
    });


    this.productDetails = [{
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
    }];

    this.recentSellingProducts = [{
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg'
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_1.jpg'
    },
    {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_3.jpg'
    }, {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 0,
      rating: 4,
      originalPrice: 400.00,
      actualPrice: 300.00,
      imageUrl: 'assets/images/category_2.jpg'
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

}
