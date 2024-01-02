import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { EventBusService } from 'src/app/services/event-bus.service';
import { EventData } from 'src/app/shared/classes/event-class';
import { Chronicles } from 'src/app/shared/Interfaces/chronicle.interface';

@Component({
  selector: 'app-chronicles-card',
  standalone: true,
  imports: [CommonModule, PrimeNgModule, FormsModule],
  templateUrl: './chronicles-card.component.html',
  styleUrls: ['./chronicles-card.component.scss']
})
export class ChroniclesCardComponent {
  @Input('chronicles') chronicles !: Chronicles;

  ratingValue: number = 4;
  visible: boolean = false;

  constructor(private eventBusService: EventBusService) { }

  ngOnChanges(changes: any): void { }

  ngOnInit() { }

  ngOnDestroy() { }


  showDialog(data: Chronicles) {
    this.eventBusService.emit(new EventData('chronicle-data-view', data))
  }
}
