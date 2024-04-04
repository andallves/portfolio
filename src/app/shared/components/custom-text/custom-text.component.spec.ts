import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextComponent } from 'src/app/shared/components/custom-text/custom-text.component';

describe('CustomTextComponent', () => {
  let component: CustomTextComponent;
  let fixture: ComponentFixture<CustomTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
