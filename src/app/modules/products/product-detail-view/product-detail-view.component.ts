import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { Prices, Product } from 'src/app/shared/Interfaces/product.interface';
import { ProductService } from '../product.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent {

  rating: number = 4;
  suggestedProducts: Product[] = [];
  showFooterCart: boolean = false;
  productId: string = '';
  subscriptions: Subscription[] = [];
  productDetails!: Product;
  selectedSize!: Prices;
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

  productReviewDetails: any = {}

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

  constructor(public commonService: CommonService, private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService) {
    // Subscribe to the route parameter changes
    const routeSubscription = this.activatedRoute.params.subscribe(params => {
      this.productId = params['productId'];

      if (this.productId) {
        this.getProductById();
      } else {
        this.commonService.showError('Product', 'Product not present!')
      }
    });

    this.subscriptions.push(routeSubscription);
  }

  getProductById() {
    // dummy data
    this.productDetails = {
      name: 'Product Name',
      tag: true,
      tagContent: 'Trending',
      discount: 20,
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
      },
      {
        size: '2x8',
        price: 300.00
      }],
      productDetails: [`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`, ` It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book.`, ` It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`],
      reviews: [{
        fullName: 'Parthi Ram', _id: '1', comments: `It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, rating: 4
      },
      {
        fullName: 'Parthi Ram', _id: '1', comments: `It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, rating: 4
      },
      {
        fullName: 'Parthi Ram', _id: '1', comments: `It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, rating: 4
      },
      {
        fullName: 'Parthi Ram', _id: '1', comments: `It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, rating: 4
      },
      {
        fullName: 'Parthi Ram', _id: '1', comments: `It has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`, rating: 4
      }],
      images: [{ imageUrl: 'assets/images/category_2.jpg' }, { imageUrl: 'assets/images/category_1.jpg' }, { imageUrl: 'assets/images/category_3.jpg' }],
      formFields: [
        {
          label: 'Name',
          control: 'name',
          type: 'text input',
          isRequired: true,
          placeholder: 'Name'
        },
        {
          label: 'Upload Photo',
          control: 'fileUpload',
          type: 'file upload',
          isRequired: false,
          placeholder: 'Upload File'
        }
      ]
    }

    const getProductApi = this.productService.getProductById(this.productId).subscribe({
      next: resData => {
        if (resData.status) {
          this.productDetails = resData.data;
          this.getSuggestedProducts();
        } else {
          this.commonService.showSuccess('Product', 'Error fetching data!');
        }
      },
      error: err => {
        this.commonService.showError('Product', 'Error fetching data!');
      },
      complete() {

      },
    })

    this.subscriptions.push(getProductApi);
  }

  getSuggestedProducts() {
    const getProductApi = this.productService.getProductById(this.productDetails.categoryId).subscribe({
      next: resData => {
        if (resData.status) {
          this.suggestedProducts = resData.data;
        } else {
          this.commonService.showSuccess('Product', 'Error fetching data!');
        }
      },
      error: err => {
        this.commonService.showError('Product', 'Error fetching data!');
      },
      complete() {

      },
    })

    this.subscriptions.push(getProductApi);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngOnInit() {
    //dymmy data
    this.suggestedProducts = [{
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
  }

  navigateToProductDetails(product: Product) {
    this.router.navigate(['/products/detail-view', product._id])
  }

  addToCart(formData: any) {
    const cart: Product[] | any = this.commonService.cartData;

    const existingCart = JSON.parse(cart);

    const newCartData = [];

    let productToCart: Product = JSON.parse(JSON.stringify(this.productDetails));
    productToCart.quantity = 1;
    productToCart.formData = formData;
    productToCart.price = this.selectedSize;
    newCartData.push(productToCart);

    if (existingCart.length) {
      const productIndex = existingCart.findIndex((item: Product) => item._id === this.productDetails._id);

      if (productIndex !== -1) {
        existingCart.splice(productIndex, 1)
      }
    }

    existingCart.push(newCartData[0]);

    localStorage.removeItem('cartData');
    localStorage.setItem('cartData', JSON.stringify(existingCart));

    this.commonService.showSuccess('Cart', 'Product added to cart successfully...');
    this.router.navigate(['/home']);
  }

  checkExistingCart(formData: any) {
    const cart: Product[] | any = this.commonService.cartData;

    const existingCart = JSON.parse(cart);

    if (existingCart.length) {
      const isProductExists = existingCart.find((item: Product) => item._id === this.productDetails._id);

      if (isProductExists) {
        this.confirm(formData);
      }
    } else {
      this.addToCart(formData);
    }
  }

  receiveFormData(ev: any) {
    this.checkExistingCart(ev);
  }

  confirm(formData: any) {
    this.confirmationService.confirm({
      message: 'This product is already existing in your cart.',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.router.navigate(['/cart']);
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.addToCart(formData);
            break;
          case ConfirmEventType.CANCEL:
            break;
        }
      }
    });
  }
}
