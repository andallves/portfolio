import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSecondaryComponent } from 'src/app/shared/components/button-secondary/button-secondary.component';

describe('ButtonSimpleComponent', () => {
  let component: ButtonSecondaryComponent;
  let fixture: ComponentFixture<ButtonSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSecondaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
