import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-our-info',
  templateUrl: './our-info.component.html',
  styleUrls: ['./our-info.component.scss']
})
export class OurInfoComponent {

  currentInfo: string = ""

constructor(private ActivateRoute: ActivatedRoute){
  this.ActivateRoute.params.subscribe((params) => {
    const id = params['id'];
   this.currentInfo = id;
  });

  
}
}
