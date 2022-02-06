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

  vote = 0;

  down = 0;

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {}

  ngOnInit(): void {}

  addUps() {
    this.vote = this.vote + 1;
  }

  addDowns() {
    this.down = this.down + 1;
  }
}

