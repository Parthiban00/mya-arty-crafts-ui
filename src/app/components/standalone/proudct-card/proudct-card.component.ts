import { Component, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-proudct-card',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  templateUrl: './proudct-card.component.html',
  styleUrls: ['./proudct-card.component.scss']
})
export class ProudctCardComponent {
  @Input('product') product: any;

  ratingValue: number = 4;

  constructor() { }

  ngOnChanges(changes: any): void { }

  ngOnInit() { }

  ngOnDestroy() { }
}
