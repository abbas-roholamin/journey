import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PostComponent, TitleCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = signal('hello, world');
  image_url = signal('https://placehold.co/600x400');
  date = signal(new Date());
  cost = signal(12000);

  getName() {
    return this.title().toUpperCase();
  }

  updateImage(e: KeyboardEvent) {
    this.image_url.set((e.target as HTMLInputElement).value);
  }

  sayChild(e: string) {
    console.log(e);
  }
}
