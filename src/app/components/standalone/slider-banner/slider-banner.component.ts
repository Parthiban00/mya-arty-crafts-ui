import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider-banner',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  templateUrl: './slider-banner.component.html',
  styleUrls: ['./slider-banner.component.scss']
})
export class SliderBannerComponent {
  @Input('product') product: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit() { }

  ngOnDestroy() { }
}
