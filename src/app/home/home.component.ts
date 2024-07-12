import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
import { SearchBarComponent } from './ui/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Giflist</h1>
    <app-search-bar
      [subredditFormControl]="redditService.subredditFormControl"
    ></app-search-bar>
    @if (redditService.loading()) {
    <mat-progress-spinner
      mode="indeterminate"
      diameter="50"
    ></mat-progress-spinner>
    } @else {
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="
        onScroll(); redditService.pagination$.next(redditService.lastKnowGif())
      "
      class="grid-container"
    />}
  `,
  imports: [
    GifListComponent,
    InfiniteScrollModule,
    SearchBarComponent,
    MatProgressSpinnerModule,
  ],
  styles: `
  h1 {
    display: flex;
    justify-content: center;
    margin: 1.5rem;
  }`,
})
export default class HomeComponent {
  redditService = inject(RedditService);
  onScroll() {
    console.log('scrolled!!', this.redditService.lastKnowGif());
  }
}
