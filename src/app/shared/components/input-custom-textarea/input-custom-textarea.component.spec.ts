import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomTextareaComponent } from './input-custom-textarea.component';

describe('InputCustomTextareaComponent', () => {
  let component: InputCustomTextareaComponent;
  let fixture: ComponentFixture<InputCustomTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCustomTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCustomTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
