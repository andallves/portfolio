import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyIconComponent } from './technology-icon.component';

describe('TechnologyIconComponent', () => {
  let component: TechnologyIconComponent;
  let fixture: ComponentFixture<TechnologyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
