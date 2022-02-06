import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Be the flame, not the moth',
      'Casanova', 'Saitore', 
      new Date(2020, 3, 14), 
    ),
    new Quote(
      2,
      'Above all, be the heroine of your life, not the victim.',
      'Nora Ephron', 'Saitore', 
      new Date(2020, 3, 14), 
    ),
  ];

  toggleDetails(index: number) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote: Quote) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
