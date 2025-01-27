import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  title = input.required();
  url = input.required();

  callDad = output<string>();
}
