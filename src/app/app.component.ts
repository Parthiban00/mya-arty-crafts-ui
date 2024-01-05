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
