import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent {

  rating:number =4;

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

    constructor(){}

    ngOnInit(){

    }
}
