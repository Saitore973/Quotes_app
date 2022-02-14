import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css'],
})
export class QuoteAuthorComponent implements OnInit {
  faCoffee = faCoffee;
  @Input() quot!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  @Output() upThisVote = new EventEmitter<boolean>();

  upTheVote(up: boolean) {
    this.upThisVote.emit(up);
  }

  @Output() downThisVote = new EventEmitter<boolean>();

  downTheVote(down: boolean) {
    this.downThisVote.emit(down);
  }
  constructor() {}

  ngOnInit(): void {}
}



