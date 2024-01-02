import { Component } from '@angular/core';
import { HttpLoaderService } from './http-loader.service';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.scss']
})
export class HttpLoaderComponent {

  constructor(public httpLoaderService: HttpLoaderService) { }

}
