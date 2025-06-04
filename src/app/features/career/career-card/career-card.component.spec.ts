import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCardComponent } from 'src/app/features/career/career-card/career-card.component';

describe('CarrerCardComponent', () => {
  let component: CareerCardComponent;
  let fixture: ComponentFixture<CareerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
