import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmphaseCardComponent } from 'src/app/core/layouts/emphasis/components/emphase-card/emphase-emphase-card.component';

describe('CardComponent', () => {
  let component: EmphaseCardComponent;
  let fixture: ComponentFixture<EmphaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmphaseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmphaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
