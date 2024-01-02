import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  shrinkMenu = false;
  showSpinner!: boolean; 
  hamburgerTrigger = false;

  constructor(){

  }

  ngOnInit(){

  }

  shrinkSideNav(val: any) {
    this.hamburgerTrigger =val;
    this.shrinkMenu = val;
  }
}
