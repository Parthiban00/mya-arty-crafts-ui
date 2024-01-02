import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { ProudctCardComponent } from '../proudct-card/proudct-card.component';
import { SliderBannerComponent } from '../slider-banner/slider-banner.component';
import { ChroniclesCardComponent } from '../chronicles-card/chronicles-card.component';

@Component({
  selector: 'app-carousel-slider',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, ProudctCardComponent, SliderBannerComponent, ChroniclesCardComponent],
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss']
})
export class CarouselSliderComponent {
  @Input('sliderFor') sliderFor: string = '';
  @Input('sliderData') sliderData: any = [];

  responsiveOptions: any = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sliderFor === 'banner') {

      this.responsiveOptions = [
        {
          breakpoint: '2000px',
          numVisible: 1,
          numScroll: 1
        }
      ];

    } else if (this.sliderFor === 'suggestedProducts' || this.sliderFor === 'chronicles') {
      this.responsiveOptions = [
        {
          breakpoint: '2000px',
          numVisible: 5,
          numScroll: 5
        },
        {
          breakpoint: '1500px',
          numVisible: 4,
          numScroll: 4
        },
        {
          breakpoint: '1220px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '1000px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '550px',
          numVisible: 1,
          numScroll: 1
        }
      ];
    }
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
