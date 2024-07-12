import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIcon,
  ],
  template: ` <mat-toolbar>
    <mat-form-field>
      <input
        matInput
        placeholder="subreddit..."
        type="text"
        [formControl]="subredditFormControl()"
      />
    </mat-form-field>
    <mat-icon matSuffix>search</mat-icon>
  </mat-toolbar>`,
  styles: `
  mat-toolbar {
    height: 80px;
  }
  mat-form-field {
    width: 100%;
    padding-top: 20px;
  }
  mat-icon {
    padding: 1rem;
  }`,
})
export class SearchBarComponent {
  subredditFormControl = input.required<FormControl>();
}
