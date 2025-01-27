import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = signal('Hello, world');
  image_url = signal('https://placehold.co/600x400');

  getName() {
    return this.title().toUpperCase();
  }

  updateImage(e: KeyboardEvent) {
    this.image_url.set((e.target as HTMLInputElement).value);
  }
}
