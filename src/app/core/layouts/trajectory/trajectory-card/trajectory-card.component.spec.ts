import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectoryCardComponent } from './trajectory-card.component';

describe('CarrerCardComponent', () => {
  let component: TrajectoryCardComponent;
  let fixture: ComponentFixture<TrajectoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrajectoryCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrajectoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
