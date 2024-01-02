import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleDividerComponent } from './title-divider.component';

describe('TitleDividerComponent', () => {
  let component: TitleDividerComponent;
  let fixture: ComponentFixture<TitleDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TitleDividerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
