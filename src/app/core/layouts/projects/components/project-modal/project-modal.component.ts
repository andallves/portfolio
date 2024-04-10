import { Component, Inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CardProject } from '#core/models/entities/card-project';
import { MatIconModule } from '@angular/material/icon';
import { ButtonDefaultComponent } from '#shared/components/button-default/button-default.component';
import { CustomTextComponent } from '#shared/components/custom-text/custom-text.component';
import { DividerComponent } from '#shared/components/divider/divider.component';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatDialogModule,
    MatIconModule,
    ButtonDefaultComponent,
    CustomTextComponent,
    DividerComponent,
    NgClass,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CardProject,
    private dialogRef: MatDialogRef<ProjectModalComponent>
  ) {}
}
