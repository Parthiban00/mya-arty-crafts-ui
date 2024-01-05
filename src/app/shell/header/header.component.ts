import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { EventBusService } from 'src/app/services/event-bus.service';
import { EventData } from 'src/app/shared/classes/event-class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() shrinkSideNav = new EventEmitter<boolean>(false);

  items: any;
  shrinkSideBar = false;
  visible: boolean = false;
  position: string = 'right';
  searchStr = new FormControl('');

  constructor(private eventBusService: EventBusService, private commonService: CommonService, private router: Router) {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActive: 'active'
      },
      {
        label: 'Shop',
        icon: 'pi pi-list',
        routerLink: '/products'
      },
      {
        label: 'About Us',
        icon: 'pi pi-list',
        routerLink: '/about-us'
      },
      {
        label: 'Contact',
        icon: 'pi pi-list',
        routerLink: '/contact'
      }
    ];

  }

  ngOnInit() {
    // this.toggleMenu();

    this.searchStr.valueChanges.pipe(debounceTime(300)).subscribe((value) => {

    })
  }

  toggleMenu() {
    // this.shrinkSideBar = !this.shrinkSideBar;
    // this.shrinkSideNav.emit(this.shrinkSideBar);

  }

  logout() {
    this.eventBusService.emit(new EventData('logout', null))
  }

  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }

  navigateToProfile() {
    if (this.commonService.isLoggedIn) {
      this.router.navigate(['/my-account']);
    } else {
      this.router.navigate(['/auth'])
    }
  }
}
