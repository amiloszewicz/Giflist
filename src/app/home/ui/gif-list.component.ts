import { Component, input } from '@angular/core';
import { Gif } from '../../shared/interfaces';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  template: `
    @for (gif of gifs(); track $index) {
    <div>
      {{ gif.title }}
    </div>
    }
  `,
  styles: ``,
})
export class GifListComponent {
  gifs = input.required<Gif[]>();
}
