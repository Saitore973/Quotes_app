import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




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
      'Casanova',
      'Saitore',

      new Date(2020, 3, 14),
      0,
      0
    ),
    new Quote(
      2,
      'Above all, be the heroine of your life, not the victim.',
      'Nora Ephron',
      'Saitore',

      new Date(2022, 1, 1),
      0,
      0
    ),
  ];

  vote = 0;

  down = 0;

  preNum!: number;
  lastNum!: number;
  counter!: number;

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

  addUpVote(upThisVote: boolean, index: number) {
    if (upThisVote) {
      this.quotes[index].upVote++;
    }
  }

  addDownVote(downThisVote: boolean, index: number) {
    if (downThisVote) {
      this.quotes[index].downVote--;
    }
  }

  highestUpVote() {
    let highArray = [];

    for (let i = 0; i < this.quotes.length; i++) {
      highArray.push(this.quotes[i].upVote);
    }
    let highestVote = Math.max(...highArray);
    if (highestVote === 0) {
      return 1;
    } else {
      return highestVote;
    }
  }

  completeGoal(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}



 
