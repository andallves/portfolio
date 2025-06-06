import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalComponent } from 'src/app/features/projects/components/project-modal/project-modal.component';

describe('ProjectModalComponent', () => {
  let component: ProjectModalComponent;
  let fixture: ComponentFixture<ProjectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
