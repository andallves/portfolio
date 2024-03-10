import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMidiaComponent } from './social-midia.component';

describe('SocialMidiaComponent', () => {
  let component: SocialMidiaComponent;
  let fixture: ComponentFixture<SocialMidiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMidiaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
