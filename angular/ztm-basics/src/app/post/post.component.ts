import {
  Component,
  input,
  output,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = input.required();
  url = input.required();

  callDad = output<string>();

  constructor() {
    console.log('ehllo');
  }

  ngOnInit() {
    console.log('init');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnChanges');
  }
}
