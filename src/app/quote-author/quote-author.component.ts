import { Component, Input, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {
  @Input() quot!:Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
