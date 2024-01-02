import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
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

  constructor(private eventBusService: EventBusService) {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
        routerLinkActive: 'active'
      },
      {
        label: 'Products',
        icon: 'pi pi-list',
        routerLink: '/products'
      }
    ];

  }

  ngOnInit() {
    // this.toggleMenu();

    this.searchStr.valueChanges.pipe(debounceTime(300)).subscribe((value)=>{
      
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
}
