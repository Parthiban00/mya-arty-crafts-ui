import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChroniclesCardComponent } from './chronicles-card.component';

describe('ChroniclesCardComponent', () => {
  let component: ChroniclesCardComponent;
  let fixture: ComponentFixture<ChroniclesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChroniclesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChroniclesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
