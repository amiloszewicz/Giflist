import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Gif } from '../../shared/interfaces';
import { WINDOW } from '../../shared/utils/injection-tokens';
import { GifPlayerComponent } from './gif-player.component';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  template: `
    @for (gif of gifs(); track gif.permalink) {
    <div>
      <app-gif-player
        [src]="gif.src"
        [thumbnail]="gif.thumbnail"
      ></app-gif-player>
      <mat-toolbar>
        <span>{{ gif.title }}</span>
        <span class="toolbar-spacer"></span>
        <button
          mat-icon-button
          aria-label="Example icon-button with share icon"
          (click)="window.open('https://reddit.com/' + gif.permalink)"
        >
          <mat-icon
            aria-hidden="false"
            aria-label="Example icon-button with comment icon"
            >comment</mat-icon
          >
        </button>
      </mat-toolbar>
    </div>
    } @empty {
    <p>Can't find any gifs 🤷</p>
    }
  `,
  styles: `
  div {
    padding-bottom: 2rem;
    background: var(--mat-toolbar-container-background-color);
  }
  .toolbar-spacer {
    flex: 1 1 auto;
  }
`,
  imports: [
    GifPlayerComponent,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
  window = inject(WINDOW);
}
