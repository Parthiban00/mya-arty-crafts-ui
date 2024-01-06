import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/shared/Interfaces/product.interface';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-proudct-card',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  templateUrl: './proudct-card.component.html',
  styleUrls: ['./proudct-card.component.scss']
})
export class ProudctCardComponent {
  @Input('product') product !: Product;
  // @Output() messageEvent = new EventEmitter<string>();
  
  ratingValue: number = 4;

  constructor(public commonService: CommonService) { }

  ngOnChanges(changes: any): void { }

  ngOnInit() { }

  ngOnDestroy() { }


  // sendMessage() {
  //   this.messageEvent.emit('Message from child');
  // }
}
