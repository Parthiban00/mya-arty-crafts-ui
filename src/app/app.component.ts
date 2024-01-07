import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { StorageService } from './services/storage.service';
import { AuthenticationService } from './authentication/authentication.service';
import { EventBusService } from './services/event-bus.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-prime';
  display=false;
  isLoggedIn = false;
  eventBusSub?: Subscription;

  constructor(
    private primengConfig: PrimeNGConfig,  
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private eventBusService: EventBusService,
    private router:Router,
    private commonService: CommonService
    ){
    this.primengConfig.ripple = true;
  }

  ngOnInit(){
    // this.isLoggedIn = this.storageService.isLoggedIn();

    // if (this.isLoggedIn) {
    //   const user = this.storageService.getUser();
    //   user ? this.router.navigate(['']) : '';
    // }else{
    //   this.router.navigate(['/sign-in']);
    // }

    // this.eventBusSub = this.eventBusService.on('logout', () => {
    //   this.logout();
    // });

    //to set the cartData as default - for testing
    const cartData = [
      {
          "name": "Product Name",
          "tag": true,
          "tagContent": "Trending",
          "discount": 20,
          "rating": 4,
          "originalPrice": 400,
          "actualPrice": 300,
          "imageUrl": "assets/images/category_1.jpg",
          "_id": "1",
          "quantity": 1,
          "categoryId": "1",
          "description": "  It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
          "prices": [
              {
                  "size": "2x4",
                  "price": 200
              },
              {
                  "size": "2x8",
                  "price": 300
              }
          ],
          "productDetails": [
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n      of type and scrambled it to make a type specimen book.",
              " It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been\n      the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n      of type and scrambled it to make a type specimen book.",
              " It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged."
          ],
          "reviews": [
              {
                  "fullName": "Parthi Ram",
                  "_id": "1",
                  "comments": "It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
                  "rating": 4
              },
              {
                  "fullName": "Parthi Ram",
                  "_id": "1",
                  "comments": "It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
                  "rating": 4
              },
              {
                  "fullName": "Parthi Ram",
                  "_id": "1",
                  "comments": "It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
                  "rating": 4
              },
              {
                  "fullName": "Parthi Ram",
                  "_id": "1",
                  "comments": "It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
                  "rating": 4
              },
              {
                  "fullName": "Parthi Ram",
                  "_id": "1",
                  "comments": "It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged.",
                  "rating": 4
              }
          ],
          "images": [
              {
                  "imageUrl": "assets/images/category_2.jpg"
              },
              {
                  "imageUrl": "assets/images/category_1.jpg"
              },
              {
                  "imageUrl": "assets/images/category_3.jpg"
              }
          ],
          "formFields": [
              {
                  "label": "Name",
                  "control": "name",
                  "type": "text input",
                  "isRequired": true,
                  "placeholder": "Name"
              },
              {
                  "label": "Upload Photo",
                  "control": "fileUpload",
                  "type": "file upload",
                  "isRequired": false,
                  "placeholder": "Upload File"
              }
          ],
          "formData": {
              "name": "asdf",
              "fileUpload": "",
              "fileUpload_base64": ""
          },
          "price": {
              "size": "2x4",
              "price": 200
          }
      }
  ];

    localStorage.removeItem('carData');
    localStorage.setItem('cartData',JSON.stringify(cartData));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Navigation start event
      }
  
      if (event instanceof NavigationEnd) {
        // Navigation end event
        this.commonService.scrollToTop();
      }
    });
  }

  logout(): void {
    this.authenticationService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
