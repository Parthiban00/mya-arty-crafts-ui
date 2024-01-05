import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  @Input('itemList') itemList: any = [];
  @Input('from') from: string ='';

  constructor() { }

  ngOnInit() { }

}
