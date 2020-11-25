import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HighlightDirective } from './shared/highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('paragraphHighlight', { static: false }) pDirective: HighlightDirective;

  users = [
    {
      name: 'Ivan',
      age: 20
    },
    {
      name: 'Petar',
      age: 30
    }
  ];

  isHighlighted = false;

  ngAfterViewInit(): void {
    console.log(this.pDirective);
  }

  toggleHighlightHandler(p: HighlightDirective) {
    console.log(p);
    this.isHighlighted = !this.isHighlighted;
  }
}
