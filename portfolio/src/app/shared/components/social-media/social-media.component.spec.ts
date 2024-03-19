import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaComponent } from '#shared/components/social-media/social-media.component';

describe('SocialMidiaComponent', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
