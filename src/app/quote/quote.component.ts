import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Be the flame, not the moth', 'Casanova'),
    new Quote(
      2,
      'Above all, be the heroine of your life, not the victim.',
      'Nora Ephron'
    ),
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  constructor() {}

  ngOnInit(): void {}
}
