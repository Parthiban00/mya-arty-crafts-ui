import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Product } from 'src/app/shared/Interfaces/product.interface';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent {

  rating: number = 4;
  suggestedProducts: Product[] =[];
  showFooterCart:boolean = false;
  images: any[] = [{
    itemImageSrc: 'assets/images/category_1.jpg',
    thumbnailImageSrc: 'assets/images/category_1.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'assets/images/category_2.jpg',
    thumbnailImageSrc: 'assets/images/category_2.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'assets/images/category_3.jpg',
    thumbnailImageSrc: 'assets/images/category_3.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  }];

  position: string = 'bottom';

  availableSizes = [
    { size: '2x6', price: 200 },
    { size: '4x8', price: 300 },
];

selectedSize:any;

  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom'
    },
    {
      label: 'Top',
      value: 'top'
    },
    {
      label: 'Left',
      value: 'left'
    },
    {
      label: 'Right',
      value: 'right'
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  productReviewDetails: any = {

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Adjust the scroll threshold as needed (500px in this case)
    this.showFooterCart = scrollPosition >= 800;

    // Optionally, you can also hide the footer-cart at the bottom of the page
    // Replace 'document.documentElement.scrollHeight' with your specific content height if needed
    if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight) {
      this.showFooterCart = false;
    }
  }

  constructor(public commonService:CommonService) { }

  ngOnInit() {
    this.suggestedProducts = [{
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
  }
}
