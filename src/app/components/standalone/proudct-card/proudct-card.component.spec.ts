import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctCardComponent } from './proudct-card.component';

describe('ProudctCardComponent', () => {
  let component: ProudctCardComponent;
  let fixture: ComponentFixture<ProudctCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProudctCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudctCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
