import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';

@Component({
  selector: 'app-title-divider',
  standalone: true,
  imports: [CommonModule, PrimeNgModule],
  templateUrl: './title-divider.component.html',
  styleUrls: ['./title-divider.component.scss']
})
export class TitleDividerComponent {

  @Input('title') title: string = '';
  @Input('icon') icon: string = '';

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }

}
